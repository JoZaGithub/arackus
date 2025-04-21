
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus } from "lucide-react";

const AddClient = () => {
  const navigate = useNavigate();

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
        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-medium">Client Name</label>
            <input className="w-full px-3 py-2 rounded-md bg-muted/50 border outline-none" placeholder="Client Name" />
          </div>
          <div>
            <label className="mb-2 block font-medium">Message</label>
            <input className="w-full px-3 py-2 rounded-md bg-muted/50 border outline-none" placeholder="Message" />
          </div>
          <div>
            <label className="mb-2 block font-medium">Receiver</label>
            <input className="w-full px-3 py-2 rounded-md bg-muted/50 border outline-none" placeholder="Receiver" />
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
