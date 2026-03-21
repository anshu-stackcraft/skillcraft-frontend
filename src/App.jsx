import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Home from "./pages/HomePage";
import Courses from "./pages/Courses";
import Live from "./pages/Live";
import FreeClasses from "./pages/FreeClasses";
import ClassSubjects from "./pages/classes/ClassSubjects";
import SubjectVideos from "./pages/videos/SubjectVideos";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";

import VideoLinksHome from "./pages/admin/VideoLinksHome";
import VideoLinksClass from "./pages/admin/VideoLinksClass";

import { useAuth } from "./context/auth";

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/live" element={<Live />} />

        <Route path="/freeclasses" element={<FreeClasses />} />
        <Route path="/freeclasses/class/:classId" element={<ClassSubjects />} />
        <Route
          path="/freeclasses/class/:classId/:subjectSlug"
          element={<SubjectVideos />}
        />

        {/* Legacy routes (redirects) */}
        <Route path="/video" element={<Navigate to="/freeclasses" replace />} />
        <Route
          path="/class9"
          element={<Navigate to="/freeclasses/class/9" replace />}
        />
        <Route
          path="/class10"
          element={<Navigate to="/freeclasses/class/10" replace />}
        />
        <Route
          path="/class11"
          element={<Navigate to="/freeclasses/class/11" replace />}
        />
        <Route
          path="/class12"
          element={<Navigate to="/freeclasses/class/12" replace />}
        />

        <Route element={<PrivateRoute />}>
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin/video-links" element={<VideoLinksHome />} />
          <Route path="/admin/video-links/:classId" element={<VideoLinksClass />} />
          <Route
            path="/admin/video-links/class9"
            element={<Navigate to="/admin/video-links/9" replace />}
          />
          <Route
            path="/admin/video-links/class10"
            element={<Navigate to="/admin/video-links/10" replace />}
          />
          <Route
            path="/admin/video-links/class11"
            element={<Navigate to="/admin/video-links/11" replace />}
          />
          <Route
            path="/admin/video-links/class12"
            element={<Navigate to="/admin/video-links/12" replace />}
          />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
