import { Link } from "react-router-dom";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

/* ================= DATA ================= */
const streams = [
  {
    title: "Science",
    subjects: [
      { name: "Physics", path: "/class11/physics" },
      { name: "Chemistry", path: "/class11/chemistry" },
      { name: "Mathematics", path: "/class11/maths" },
      { name: "Biology", path: "/class11/biology" },
      { name: "Computer Science", path: "/class11/computer-science" },
    ],
  },
  {
    title: "Commerce",
    subjects: [
      { name: "Accountancy", path: "/class11/accountancy" },
      { name: "Business Studies", path: "/class11/business-studies" },
      { name: "Economics", path: "/class11/economics" },
    ],
  },
  {
    title: "Arts / Humanities",
    subjects: [
      { name: "History", path: "/class11/history" },
      { name: "Political Science", path: "/class11/political-science" },
      { name: "Geography", path: "/class11/geography" },
      { name: "Sociology", path: "/class11/sociology" },
      { name: "Psychology", path: "/class11/psychology" },
    ],
  },
  {
    title: "Common Subjects",
    subjects: [
      { name: "English", path: "/class11/english" },
      { name: "Hindi", path: "/class11/hindi" },
    ],
  },
];

const Class11 = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-linear-to-br from-black via-zinc-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Class 11 <span className="text-orange-500">Subjects</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Choose your stream and explore structured lessons with clear explanations.
        </p>
      </section>

      {/* ================= STREAM SECTIONS ================= */}
      <section className="py-16 px-6 md:px-24 space-y-20">

        {streams.map((stream, index) => (
          <div key={index}>

            {/* Stream Title */}
            <h2 className="text-3xl font-bold mb-10 text-orange-500 border-b border-orange-500/30 pb-3">
              {stream.title}
            </h2>

            {/* Subjects Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {stream.subjects.map((subject, i) => (
                <Link
                  key={i}
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

                    <h3 className="text-lg font-semibold mb-2">
                      {subject.name}
                    </h3>

                    <div className="flex items-center justify-center gap-2 text-sm text-orange-400 opacity-0 group-hover:opacity-100 transition">
                      Start Learning <FaArrowRight />
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        ))}

      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-orange-500 text-black text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Want Full Live Class 11 Course?
        </h2>

        <p className="mb-8 text-lg">
          Join premium batches with live classes, notes, tests & doubt support.
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

export default Class11;
