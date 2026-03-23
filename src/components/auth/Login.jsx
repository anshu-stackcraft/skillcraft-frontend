import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import { Mail, Lock, Loader2 } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!data.login || !data.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    try {
      // 🔥 Supabase login
      const { error } = await supabase.auth.signInWithPassword({
        email: data.login, // 👈 Supabase me email hi use hota hai
        password: data.password,
      });

      if (error) throw error;

      // ✅ success
      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4 relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <form
        onSubmit={submit}
        className="relative z-10 w-full max-w-sm backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-7 transition-all duration-300 hover:scale-[1.01]"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-1">
          Welcome Back 👋
        </h2>
        <p className="text-center text-zinc-400 mb-6 text-sm">
          Login to your account
        </p>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-zinc-400" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-black/40 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            value={data.login}
            onChange={(e) =>
              setData({ ...data, login: e.target.value })
            }
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <Lock className="absolute left-3 top-3 text-zinc-400" size={18} />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-black/40 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            value={data.password}
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center animate-pulse">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all
          ${
            loading
              ? "bg-orange-400 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-[1.02] active:scale-95"
          }`}
        >
          {loading && <Loader2 className="animate-spin" size={18} />}
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-[1px] bg-zinc-700"></div>
          <span className="text-zinc-500 text-xs">OR</span>
          <div className="flex-1 h-[1px] bg-zinc-700"></div>
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-zinc-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 hover:text-orange-400 font-medium"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;