import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/axios";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submit = async (e) => {
    e.preventDefault(); 
    setError("");

    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await api.post("register/", {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      navigate("/login"); // ✅ success
    } catch (err) {
      setError(
        err?.response?.data?.msg ||
        err?.response?.data?.detail ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-black via-zinc-900 to-black">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-6"
      >
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Register
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={data.username}
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-2 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />

        {error && (
          <p className="text-red-500 text-xs mb-2 text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition-all
            ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 active:scale-95"
            }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-sm text-zinc-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
