import {Routes, Route, useLocation, Navigate, Outlet,} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/HomePage";
import Nav from "./components/layout/Nav";
import GetInTouch from "./components/GetInTouch";
import DesignSection from "./components/DesignSection";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Logout from "./components/auth/Logout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HireMe from "./pages/HireMe";
import Resume from "./pages/Resume";
import ProfilePage from "./pages/ProfilePage";

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
        <Route path="/getintuch" element={<GetInTouch />} />
        <Route path="/design" element={<DesignSection />} />
        <Route path="/about" element={<About />} />

        {/* 🔐 Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
