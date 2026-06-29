import { FaCalculator, FaClock, FaEquals } from "react-icons/fa";

function StatsCards({ history }) {
  const totalCalculations = history.length;

  const lastResult =
    history.length > 0 ? history[0].result : "-";

  const today = new Date().toDateString();

  const todayCalculations = history.filter((item) => {
    return new Date(item.created_at).toDateString() === today;
  }).length;

  const cards = [
    {
      title: "Total Calculations",
      value: totalCalculations,
      icon: <FaCalculator className="text-3xl text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      title: "Last Result",
      value: lastResult,
      icon: <FaEquals className="text-3xl text-green-600" />,
      bg: "bg-green-50",
    },
    {
      title: "Today's Calculations",
      value: todayCalculations,
      icon: <FaClock className="text-3xl text-purple-600" />,
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bg} rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {card.value}
              </h2>
            </div>

            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;