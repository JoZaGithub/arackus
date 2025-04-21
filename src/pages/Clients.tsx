
import { useNavigate } from "react-router-dom";
import { Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const clients = [
  { id: 1, name: "Acme Corp" },
  { id: 2, name: "Globex" }
];

const Clients = () => {
  const navigate = useNavigate();

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
        {clients.map((client) => (
          <div key={client.id} className="glass flex items-center gap-4 py-4 px-5">
            <input
              type="text"
              defaultValue={client.name}
              placeholder="Client Name"
              className="bg-transparent text-lg flex-1 outline-none"
              style={{ minWidth: 100 }}
            />
            <Button variant="default" size="sm" className="flex items-center gap-2">
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
