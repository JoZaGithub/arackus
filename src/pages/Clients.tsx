
import { useNavigate } from "react-router-dom";
import { Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

// Cookie helpers
function getClientsFromCookie(): { email: string; name: string }[] {
  const raw = document.cookie
    .split("; ")
    .find((row) => row.startsWith("clients="));
  if (!raw) return [];
  try {
    const decoded = decodeURIComponent(raw.split("=")[1]);
    return JSON.parse(decoded);
  } catch {
    return [];
  }
}

function saveClientsToCookie(clients: { email: string; name: string }[]) {
  document.cookie =
    "clients=" + encodeURIComponent(JSON.stringify(clients)) + "; path=/; max-age=31536000";
}

const Clients = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<{ email: string; name: string }[]>([]);

  useEffect(() => {
    // Initial load from cookie
    setClients(getClientsFromCookie());
  }, []);

  return (
    <div className="max-w-2xl w-full mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Clients</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-semibold hover:bg-accent/80 transition"
          onClick={() => navigate("/add-client")}
        >
          <Plus size={20} />
          Add Client
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {clients.length === 0 && (
          <div className="glass p-4 text-center text-gray-400">
            No clients found.
          </div>
        )}
        {clients.map((client, idx) => (
          <div key={idx} className="glass flex items-center gap-4 py-4 px-5">
            <input
              type="text"
              defaultValue={client.name}
              placeholder="Client Name"
              className="bg-transparent text-lg flex-1 outline-none"
              style={{ minWidth: 100 }}
              readOnly
            />
            <input
              type="email"
              defaultValue={client.email}
              placeholder="Email"
              className="bg-transparent text-lg flex-1 outline-none text-muted-foreground"
              style={{ minWidth: 180 }}
              readOnly
            />
            <Button variant="default" size="sm" className="flex items-center gap-2" disabled>
              <Send size={18} />
              Send
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
