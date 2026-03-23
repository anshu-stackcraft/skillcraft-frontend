import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import { User, Mail, Lock, Loader2 } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!data.username || !data.email || !data.password) {
      setError("All fields are required");
      return;
    }

    if (data.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // 🔥 Supabase Register
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            username: data.username, // 👈 extra field store
          },
        },
      });

      if (error) throw error;

      // ✅ success
      setSuccess("Account created! Check your email 📩");
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setError(err.message || "Registration failed");
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
          Create Account 🚀
        </h2>
        <p className="text-center text-zinc-400 mb-6 text-sm">
          Register to get started
        </p>

        {/* Username */}
        <div className="relative mb-4">
          <User className="absolute left-3 top-3 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-black/40 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            value={data.username}
            onChange={(e) =>
              setData({ ...data, username: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-zinc-400" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-3 py-3 rounded-lg bg-black/40 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
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

        {/* Success */}
        {success && (
          <p className="text-green-500 text-sm mb-3 text-center animate-pulse">
            {success}
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
          {loading ? "Creating..." : "Register"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-[1px] bg-zinc-700"></div>
          <span className="text-zinc-500 text-xs">OR</span>
          <div className="flex-1 h-[1px] bg-zinc-700"></div>
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:text-orange-400 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;