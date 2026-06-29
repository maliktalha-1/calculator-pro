import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  FaCalculator,
  FaShieldAlt,
  FaDatabase,
  FaHistory,
} from "react-icons/fa";
import toast from "react-hot-toast";

import API from "../services/api";
import { AuthContext } from "../context/AuthContext";


function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    toast.error("Please fill all fields.");
    return;
  }

  try {
    setLoading(true);

    const response = await API.post("/auth/login", formData);

    login(response.data.user, response.data.token);

    toast.success("Welcome back!");

    navigate("/dashboard");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login Failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-cyan-500 to-blue-700 p-12">

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">

                <FaCalculator className="text-4xl text-cyan-600" />

              </div>

              <h1 className="text-4xl font-bold text-white">
                Calculator Pro
              </h1>

            </div>

            <h2 className="mt-14 text-5xl font-bold leading-tight text-white">

              Smart Calculator

              <br />

              with Secure

              <br />

              Cloud History

            </h2>

            <p className="mt-8 text-lg leading-8 text-blue-100">

              Perform calculations securely and store history
              in MySQL.

            </p>

          </div>

          <div className="space-y-5 text-lg text-white">

            <div className="flex items-center gap-3">

              <FaShieldAlt />

              JWT Authentication

            </div>

            <div className="flex items-center gap-3">

              <FaDatabase />

              MySQL Database

            </div>

            <div className="flex items-center gap-3">

              <FaHistory />

              Unlimited History

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-white p-10 md:p-16">

          <div className="max-w-md mx-auto">

            <h2 className="text-4xl font-bold text-gray-800">

              Welcome Back

            </h2>

            <p className="mt-3 text-gray-500">

              Login to continue.

            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              <div>

                <label className="block mb-2 font-medium">

                  Email

                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-cyan-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">

                  Password

                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-cyan-500"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-white font-semibold hover:scale-[1.02] transition"
              >
                {loading ? "Logging In..." : "Login"}
              </button>

            </form>

            <p className="mt-8 text-center">

              Don't have an account?

              <Link
                to="/signup"
                className="ml-2 text-cyan-600 font-semibold"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;