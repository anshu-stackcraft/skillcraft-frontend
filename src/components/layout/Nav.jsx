import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Courses", path: "/courses" },
        { name: "Live", path: "/live" },
        { name: "Free Classes", path: "/freeclasses" },
    ];

    return (
            <nav className=" fixed top-0 left-0 w-full z-50 ">
            {/* NAV BAR */}
            <div className="
        px-6 py-4 flex items-center justify-between
        md:bg-transparent
      ">
                {/* Logo */}
                <Link to="/" className="text-white  font-bold text-xl">
                    Skill<span className="text-orange-500">Craft</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-white relative after:absolute after:left-0 after:-bottom-1 after:h-0.5
              after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {user ? (
                        <button
                            onClick={logout}
                            className="border border-orange-500 px-4 py-1 rounded
              hover:bg-orange-500 hover:text-black transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-orange-500 text-black px-4 py-1 rounded"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Dark overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/60"
                        />

                        {/* Right Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="
                fixed top-0 right-0 w-50 rounded-2xl
                bg-black/50 backdrop-blur-xl
                border-l border-white/10
                px-6 py-6 z-50
              "
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">

                                <button
                                    onClick={() => setOpen(false)}
                                    className=" absolute top-4 right-4 mr-3
      text-orange-500 text-2xl
      hover:rotate-90 transition"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex flex-col gap-6">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setOpen(false)}
                                        className="
                      text-white text-lg
                      hover:text-orange-500 transition
                    "
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <div className="pt-6 border-t border-white/10">
                                    {user ? (
                                        <button
                                            onClick={() => {
                                                logout();
                                                setOpen(false);
                                            }}
                                            className="
                        w-full border border-orange-500 px-4 py-2 rounded
                        hover:bg-orange-500 hover:text-black transition
                      "
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            to="/login"
                                            onClick={() => setOpen(false)}
                                            className="
                        block w-full bg-orange-500 text-black
                        px-4 py-2 rounded text-center
                      "
                                        >
                                            Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
