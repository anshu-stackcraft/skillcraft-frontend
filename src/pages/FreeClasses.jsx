import { Link } from "react-router-dom";
import { FaYoutube, FaPlayCircle } from "react-icons/fa";

const FreeClasses = () => {
    return (
        <div className="bg-black text-white min-h-screen">

            {/* ================= HERO ================= */}
            <section className="text-center py-24 px-6 bg-linear-to-br from-black via-zinc-900 to-black">

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Free <span className="text-orange-500">Classes</span>
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Watch high-quality concept-based classes for CBSE Class 9 to 12.
                    Clear explanations. Smart teaching. Better results.
                </p>

            </section>

            {/* ================= CLASS CARDS ================= */}
            <section className="py-20 px-6 md:px-24">

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Class 9", path: "/class9" },
                        { title: "Class 10", path: "/class10" },
                        { title: "Class 11", path: "/class11" },
                        { title: "Class 12", path: "/class12" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-orange-500/10 border border-orange-500
                         p-8 rounded-2xl text-center shadow-md"
                        >
                            <FaYoutube size={40} className="text-orange-500 mx-auto mb-4" />

                            <h3 className="text-xl font-semibold mb-4">
                                {item.title} Classes
                            </h3>

                            <Link
                                to={item.path}
                                className="inline-flex items-center gap-2 bg-orange-500 text-black px-6 py-2 rounded-xl font-semibold"
                            >
                                <FaPlayCircle />
                                Watch Now
                            </Link>

                        </div>
                    ))}
                </div>

            </section>

            {/* ================= CTA ================= */}
            <section className="py-24 bg-orange-500 text-black text-center">

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Want Full Premium Course?
                </h2>

                <p className="mb-8 text-lg">
                    Join live interactive batches with notes, tests & doubt support.
                </p>

                <Link
                    to="/register"
                    className="bg-black text-orange-500 px-10 py-4 rounded-xl font-semibold"
                >
                    Join Batch
                </Link>

            </section>

        </div>
    );
};

export default FreeClasses;
