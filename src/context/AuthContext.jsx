import { useEffect, useState } from "react";
import api from "../services/axios";
import { AuthContext } from "./auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(() => {
    return Boolean(localStorage.getItem("access"));
  });

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (!access) return;

    api
      .get("me/", {
        headers: { Authorization: `Bearer ${access}` },
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

  const login = async (data) => {
    const res = await api.post("login/", data);
    const { access, refresh, user: nextUser } = res.data;

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    localStorage.setItem("user", JSON.stringify(nextUser));

    setUser(nextUser);
    return res.data;
  };

  const register = async (data) => {
    return await api.post("register/", data);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

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
}

