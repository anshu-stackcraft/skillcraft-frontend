import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";


function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const runLogout = async () => {
      try {
        await logout(); 
      } finally {
        setTimeout(() => {
          navigate("/login");
        }, 800);
      }
    };

    runLogout();
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-black px-4">
      <div className="flex flex-col items-center gap-4 bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl px-8 py-10">
        <div className="p-4 rounded-full bg-orange-500/10 animate-pulse">
          <LogOut size={32} className="text-orange-500" />
        </div>

        <h2 className="text-xl text-orange-500 font-semibold">
          Logging you out...
        </h2>

        <p className="text-sm text-zinc-400 text-center">
          Please wait, ending your session securely
        </p>
      </div>
    </div>
  );
}

export default Logout;
