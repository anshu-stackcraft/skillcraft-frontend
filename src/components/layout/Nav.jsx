import { Link } from "react-router-dom";
import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../context/auth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Courses", path: "/courses" },
    { name: "Live", path: "/live" },
    { name: "Free Classes", path: "/freeclasses" },
  ];

  const linkClass =
    'text-white relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all';

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="px-6 py-4 flex items-center justify-between md:bg-transparent">
        <Link to="/" className="text-white font-bold text-xl">
          Skill<span className="text-orange-500">Craft</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className={linkClass}>
              {item.name}
            </Link>
          ))}

          {user ? (
            <Link to="/admin/video-links" className={linkClass}>
              Admin
            </Link>
          ) : null}

          {user ? (
            <button
              type="button"
              onClick={logout}
              className="border border-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-black transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-orange-500 text-black px-4 py-1 rounded">
              Login
            </Link>
          )}
        </div>

        <button
          type="button"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60"
            />

            <Motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-72 rounded-2xl bg-black/50 backdrop-blur-xl border-l border-white/10 px-6 py-6 z-50"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-orange-500 text-2xl hover:rotate-90 transition"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

              <div className="mt-12 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-white text-lg hover:text-orange-500 transition"
                  >
                    {item.name}
                  </Link>
                ))}

                {user ? (
                  <Link
                    to="/admin/video-links"
                    onClick={() => setOpen(false)}
                    className="text-white text-lg hover:text-orange-500 transition"
                  >
                    Admin
                  </Link>
                ) : null}

                <div className="pt-6 border-t border-white/10">
                  {user ? (
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                      className="w-full border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-black transition"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                      className="block w-full bg-orange-500 text-black px-4 py-2 rounded text-center"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </Motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
