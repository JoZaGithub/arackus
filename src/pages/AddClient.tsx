
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

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

const AddClient = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Add the new client to the cookie
    const existingClients = getClientsFromCookie();
    const newClients = [...existingClients, { email, name }];
    saveClientsToCookie(newClients);

    toast({
      title: "Success!",
      description: "Client added successfully",
    });

    navigate("/clients");
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      <button
        className="flex items-center gap-2 mb-8 text-accent hover:text-sidebarAccent transition"
        onClick={() => navigate("/clients")}
      >
        <ArrowLeft size={18} />
        Back to Clients
      </button>
      <div className="glass p-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
          <UserPlus size={22} /> Add New Client
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block font-medium">Client Name</label>
            <input 
              className="w-full px-3 py-2 rounded-md bg-muted/50 border outline-none" 
              placeholder="Client Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input 
              type="email"
              className="w-full px-3 py-2 rounded-md bg-muted/50 border outline-none" 
              placeholder="client@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-accent text-white rounded-md font-semibold hover:bg-accent/80 transition"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
