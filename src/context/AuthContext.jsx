import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // ⚡ FAST BOOT
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user;

  // 🔁 VERIFY TOKEN ONCE
  useEffect(() => {
    const access = localStorage.getItem("access");

    if (!access) {
      setLoading(false);
      return;
    }

    api
      .get("me/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch(() => {
        localStorage.clear();
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔐 LOGIN
  const login = async (data) => {
    const res = await api.post("login/", data);

    const { access, refresh, user } = res.data;

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
    return res.data;
  };

  // 📝 REGISTER
  const register = async (data) => {
    return await api.post("register/", data);
  };

  // 🚪 LOGOUT (JWT STYLE)
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  // 👤 PROFILE UPDATE SYNC
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
