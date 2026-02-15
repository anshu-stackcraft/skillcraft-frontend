import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    login: "",      // ✅ username OR email
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault(); // ✅ form submit fix
    setError("");

    if (!data.login || !data.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    try {
      await login(data);   // ✅ correct payload
      navigate("/");       // ✅ redirect after login
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-black px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-6"
      >
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username or Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={data.login}
          onChange={(e) =>
            setData({ ...data, login: e.target.value })
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

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
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
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center text-zinc-400 mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
