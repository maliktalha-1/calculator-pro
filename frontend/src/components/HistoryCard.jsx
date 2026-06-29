import {
  deleteCalculation,
  clearHistory,
} from "../services/calculationService";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

function HistoryCard({
  history,
  loading,
  refreshHistory,
}) {

  const handleDelete = async (id) => {
    try {
      await deleteCalculation(id);
      toast.success("Calculation deleted.");

      refreshHistory();

    } catch (error) {
      toast.error("Unable to delete calculation.");
    }
  };

  const handleClearHistory = async () => {

    if (!window.confirm("Clear all history?")) return;

    try {

      await clearHistory();
      toast.success("History cleared successfully.");

      refreshHistory();

    } catch (error) {

      toast.error("Unable to clear history.");

    }

  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 h-full">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Calculation History
        </h2>

        <button
          onClick={handleClearHistory}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Clear All
        </button>

      </div>

      {loading ? (

        <p className="text-center text-gray-500">
          Loading...
        </p>

      ) : history.length === 0 ? (

        <p className="text-center text-gray-500">
          No calculations yet.
        </p>

      ) : (

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

          {history.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center border rounded-xl p-4 hover:bg-gray-50 transition"
            >

              <div>

                <p className="font-semibold text-lg">
                  {item.expression}
                </p>

                <p className="text-blue-600 font-bold">
                  = {item.result}
                </p>

              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                <FaTrash />
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default HistoryCard;