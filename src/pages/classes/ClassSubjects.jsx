import { Link, Navigate, useParams } from "react-router-dom";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import { getClassConfig } from "../../data/freeClasses";

function SubjectCard({ to, name }) {
  return (
    <Link
      to={to}
      className="
        group relative
        bg-orange-500/10 border border-orange-500/30
        p-8 rounded-2xl text-center
        hover:scale-105 hover:border-orange-500
        hover:shadow-xl hover:shadow-orange-500/20
        transition duration-300
      "
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0
                   group-hover:opacity-100
                   bg-linear-to-br from-orange-500/10 to-transparent
                   transition"
      />

      <div className="relative z-10">
        <FaBookOpen
          size={42}
          className="mx-auto mb-4 text-orange-500 group-hover:scale-110 transition duration-300"
        />

        <h3 className="text-lg font-semibold mb-2">{name}</h3>

        <div className="flex items-center justify-center gap-2 text-sm text-orange-400 opacity-0 group-hover:opacity-100 transition">
          Start Learning <FaArrowRight />
        </div>
      </div>
    </Link>
  );
}

export default function ClassSubjects() {
  const { classId } = useParams();
  const cls = getClassConfig(classId);

  if (!cls) return <Navigate to="/freeclasses" replace />;

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="text-center py-24 px-6 bg-linear-to-br from-black via-zinc-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          {cls.title} <span className="text-orange-500">Subjects</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Choose your subject and start learning with structured free video lessons.
        </p>

        <div className="mt-8">
          <Link
            to="/freeclasses"
            className="inline-flex items-center gap-2 border border-orange-500/40 px-4 py-2 rounded-xl text-sm hover:bg-orange-500 hover:text-black transition"
          >
            Back to Free Classes
          </Link>
        </div>
      </section>

      {cls.type === "flat" ? (
        <section className="py-20 px-6 md:px-24">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {cls.subjects.map((subject) => (
              <SubjectCard
                key={subject.slug}
                name={subject.name}
                to={`/freeclasses/class/${cls.classId}/${subject.slug}`}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="py-16 px-6 md:px-24 space-y-20">
          {cls.groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-3xl font-bold mb-10 text-orange-500 border-b border-orange-500/30 pb-3">
                {group.title}
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {group.subjects.map((subject) => (
                  <SubjectCard
                    key={subject.slug}
                    name={subject.name}
                    to={`/freeclasses/class/${cls.classId}/${subject.slug}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="py-20 bg-orange-500 text-black text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Want Full Live Classes?
        </h2>

        <p className="mb-8 text-lg">
          Join live batches with notes, tests and doubt solving support.
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
}

