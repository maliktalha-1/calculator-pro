import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCalculator, FaUser } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import toast from "react-hot-toast";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    toast.error("Please fill all fields.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  try {
    setLoading(true);

    const response = await API.post("/auth/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    toast.success("Account created successfully!");

    navigate("/");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration failed."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-purple-600 to-indigo-700 p-12 text-white">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <FaCalculator className="text-purple-600 text-4xl" />
            </div>

            <h1 className="text-4xl font-bold">
              Calculator Pro
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Create
            <br />
            Your
            <br />
            Account
          </h2>

          <p className="mt-8 text-lg text-purple-100">
            Register once and keep your calculation history
            securely stored in your account.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white p-10 lg:p-16">
          <div className="max-w-md mx-auto">

            <h2 className="text-4xl font-bold text-gray-800">
              Sign Up
            </h2>

            <p className="mt-2 text-gray-500">
              Create your free account.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <div className="flex items-center border rounded-xl px-4">
                  <FaUser className="text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <div className="flex items-center border rounded-xl px-4">
                  <HiOutlineMail className="text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <div className="flex items-center border rounded-xl px-4">
                  <HiOutlineLockClosed className="text-gray-400" />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Confirm Password
                </label>

                <div className="flex items-center border rounded-xl px-4">
                  <HiOutlineLockClosed className="text-gray-400" />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?

              <Link
                to="/"
                className="ml-2 text-purple-600 font-semibold hover:underline"
              >
                Login
              </Link>

            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;