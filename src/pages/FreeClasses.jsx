import { Link } from "react-router-dom";
import { FaYoutube, FaPlayCircle } from "react-icons/fa";

/* ================= DATA ================= */
const classesData = [
    {
        id: 1,
        title: "Class 9",
        description: "Maths • Science • SST • English • Hindi",
        path: "/class9",
    },
    {
        id: 2,
        title: "Class 10",
        description: "Board Preparation • Important Questions",
        path: "/class10",
    },
    {
        id: 3,
        title: "Class 11",
        description: "Concept Based Learning • PCM/Commerce",
        path: "/class11",
    },
    {
        id: 4,
        title: "Class 12",
        description: "Board + Competitive Preparation",
        path: "/class12",
    },
];

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

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {classesData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-orange-500/10 border border-orange-500
                            p-8 rounded-2xl text-center shadow-md
                            hover:scale-105 transition duration-300"
                        >
                            <FaYoutube size={40} className="text-orange-500 mx-auto mb-4" />

                            <h3 className="text-xl font-semibold mb-2">
                                {item.title} Classes
                            </h3>

                            <p className="text-gray-400 text-sm mb-4">
                                {item.description}
                            </p>

                            <Link
                                to={item.path}
                                className="inline-flex items-center gap-2 bg-orange-500 text-black px-6 py-2 rounded-xl font-semibold hover:bg-orange-400 transition"
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
                    className="bg-black text-orange-500 px-10 py-4 rounded-xl font-semibold hover:bg-zinc-900 transition"
                >
                    Join Batch
                </Link>

            </section>

        </div>
    );
};

export default FreeClasses;
