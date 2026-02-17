import { Routes, Route, useLocation, Navigate, Outlet, } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/HomePage";
import Nav from "./components/layout/Nav";

import Footer from "./components/layout/Footer";
import Logout from "./components/auth/Logout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import FreeClasses from "./pages/FreeClasses";
import Class9 from "./pages/classes/Class9";
import Class10 from "./pages/classes/Class10";
import Class11 from "./pages/classes/Class11";
import Class12 from "./pages/classes/Class12";
import  Video from "./pages/videos/YouTubePlayer";

import { AuthProvider, useAuth } from "./context/AuthContext";

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  console.log(localStorage.getItem("authToken"));

  return (
    <AuthProvider>
      <Nav />

      <Routes>
        {/* 🌍 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/freeclasses" element={<FreeClasses />} />  
        <Route path="/class9" element={<Class9 />} />
        <Route path="/class10" element={<Class10 />} />
        <Route path="/class11" element={<Class11 />} />
        <Route path="/class12" element={<Class12 />} />
        <Route path="/video" element={<Video />} />



        {/* 🔐 Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
