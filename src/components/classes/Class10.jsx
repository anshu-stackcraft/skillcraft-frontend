import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const Class10 = () => {
  const subjects = [
    { name: "Hindi", path: "/class10/hindi" },
    { name: "English", path: "/class10/english" },
    { name: "Maths", path: "/class10/maths" },
    { name: "SST", path: "/class10/sst" },
    { name: "Science", path: "/class10/science" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-16 text-white">

      {/* ===== Heading ===== */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl mt-10 font-extrabold text-orange-500">
          Class 10 Subjects
        </h1>

        <p className="text-zinc-400 mt-4 text-sm md:text-lg">
          Select your subject and start learning with structured lessons.
        </p>
      </div>

      {/* ===== Subjects Grid ===== */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={subject.path}
            className="
              group relative bg-zinc-900/80 backdrop-blur
              border border-orange-500/20 rounded-2xl p-8
              hover:border-orange-500
              hover:shadow-2xl hover:shadow-orange-500/20
              transition duration-300
            "
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            bg-gradient-to-br from-orange-500/10 to-transparent transition" />

            <div className="relative z-10 text-center">
              <FaBookOpen size={48} className="mx-auto mb-5 text-orange-400 group-hover:scale-110 transition" />

              <h3 className="text-xl font-semibold text-orange-400">
                {subject.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Class10;
