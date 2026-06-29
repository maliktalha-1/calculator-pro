import { useState } from "react";
import { createCalculation } from "../services/calculationService";
import toast from "react-hot-toast";

function CalculatorCard({ refreshHistory }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    if (num1 === "" || num2 === "") {
    toast.error("Please enter both numbers.");
    return;
    }

    try {
      setLoading(true);

      const response = await createCalculation({
        num1,
        num2,
        operation,
      });

    toast.success("Calculation saved successfully.");

      // Refresh history immediately
      refreshHistory();

      // Clear inputs
      setNum1("");
      setNum2("");
      setOperation("+");
    } catch (error) {
    toast.error(
      error.response?.data?.message || "Calculation failed."
);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Calculator
      </h2>

      <div className="space-y-5">
        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (×)</option>
          <option value="/">Division (÷)</option>
        </select>

        <button
          onClick={handleCalculate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold">
          Result
        </h3>

        <p className="text-5xl font-bold text-blue-600 mt-4">
          {result !== "" ? result : "0"}
        </p>
      </div>
    </div>
  );
}

export default CalculatorCard;