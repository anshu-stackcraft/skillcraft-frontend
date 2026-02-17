import { Link } from "react-router-dom";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

const Class9 = () => {
  const subjects = [
    { id: 1, name: "Hindi", path: "/class9/hindi" },
    { id: 2, name: "English", path: "/class9/english" },
    { id: 3, name: "Maths", path: "/class9/maths" },
    { id: 4, name: "SST", path: "/class9/sst" },
    { id: 5, name: "Science", path: "/class9/science" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-linear-to-br from-black via-zinc-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Class 9 <span className="text-orange-500">Subjects</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Choose your subject and start learning with structured free video lessons.
        </p>
      </section>

      {/* ================= SUBJECT GRID ================= */}
      <section className="py-20 px-6 md:px-24">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              to={subject.path}
              className="
                group relative
                bg-orange-500/10 border border-orange-500/30
                p-8 rounded-2xl text-center
                hover:scale-105 hover:border-orange-500
                hover:shadow-xl hover:shadow-orange-500/20
                transition duration-300
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
                              group-hover:opacity-100 
                              bg-linear-to-br from-orange-500/10 to-transparent 
                              transition" />

              <div className="relative z-10">
                <FaBookOpen
                  size={42}
                  className="mx-auto mb-4 text-orange-500 
                             group-hover:scale-110 transition duration-300"
                />

                <h3 className="text-xl font-semibold mb-2">
                  {subject.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-sm text-orange-400 opacity-0 group-hover:opacity-100 transition">
                  Start Learning <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-orange-500 text-black text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Want Full Live Classes?
        </h2>

        <p className="mb-8 text-lg">
          Join live batches with notes, tests & doubt solving support.
        </p>

        <Link
          to="/register"
          className="bg-black text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-zinc-900 transition"
        >
          Join Premium Batch
        </Link>

      </section>

    </div>
  );
};

export default Class9;
