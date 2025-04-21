
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

const clients = [
  { id: 1, name: "Acme Corp", message: "", receiver: "" },
  { id: 2, name: "Globex", message: "", receiver: "" }
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
            <input
              type="text"
              placeholder="Message"
              className="bg-muted/50 border rounded-md px-3 py-2 mx-2 flex-1 outline-none"
              style={{ minWidth: 120 }}
            />
            <input
              type="text"
              placeholder="Receiver"
              className="bg-muted/50 border rounded-md px-3 py-2 flex-1 outline-none"
              style={{ minWidth: 100 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
