import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalculator,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

      {/* Left */}

      <div className="flex items-center gap-5">

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

          <FaCalculator className="text-white text-3xl" />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">

            Calculator Pro

          </h1>

          <p className="text-slate-500 mt-1">

            Secure Cloud Calculation System

          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <div className="flex items-center gap-4 bg-slate-100 rounded-2xl px-5 py-3">

          <FaUserCircle className="text-5xl text-blue-600" />

          <div>

            <p className="text-sm text-slate-500">

              Logged in as

            </p>

            <h3 className="font-bold text-lg text-slate-800">

              {user?.name || "User"}

            </h3>

          </div>

        </div>

        <button
          onClick={handleLogout}
        className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-7 py-5 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </nav>
  );
}

export default Navbar;