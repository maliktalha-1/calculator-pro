import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function WelcomeCard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-8 shadow-xl">

      <h2 className="text-3xl font-bold">
         Welcome, {user?.name} 👋
      </h2>

      <p className="mt-3 text-lg">
        Perform calculations and keep your history securely stored.
      </p>

    </div>
  );
}

export default WelcomeCard;