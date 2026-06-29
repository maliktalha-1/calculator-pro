import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import StatsCards from "../components/StatsCards";
import CalculatorCard from "../components/CalculatorCard";
import HistoryCard from "../components/HistoryCard";


import { getHistory } from "../services/calculationService";

function Dashboard() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const response = await getHistory();
      setHistory(response.calculations);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-8 space-y-8">

        <Navbar />

        <WelcomeCard />

        <StatsCards history={history} />

        <div className="grid lg:grid-cols-2 gap-8">

          <CalculatorCard
            refreshHistory={fetchHistory}
          />

          <HistoryCard
            history={history}
            loading={loading}
            refreshHistory={fetchHistory}
          />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;