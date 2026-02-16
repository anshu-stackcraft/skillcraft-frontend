import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoRocket } from "react-icons/io5";
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from "react-icons/fa";
import heroImg from "../assets/upbatch.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HomePage = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="
      min-h-screen flex flex-col-reverse md:flex-row
      items-center justify-center md:justify-between
      px-5 md:px-24
      bg-linear-to-br from-black via-zinc-900 to-black
    "
      >

        {/* ========= TEXT ========= */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            CBSE Class <span className="text-orange-500">9 to 12</span><br />
            <span className="text-orange-500">Premium Coaching</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
            Live interactive classes. <br />
            Smart notes & regular tests. <br />
            Clear concepts. Higher marks.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 text-black px-7 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 hover:scale-105"
            >
              Join Batch
            </Link>

            <Link
              to="/freeclasses"
              className="border border-orange-500 px-7 py-3 rounded-xl font-semibold
  hover:bg-orange-500 hover:text-black transition-all duration-200 active:scale-95"
            >
              Free Classes
            </Link>

          </div>
        </div>

        {/* ========= IMAGE ========= */}
        <div className="relative mt-15 md:mt-0">

          <img
            src={heroImg}
            alt="Coaching"
            className="
            w-59 sm:w-[320px] md:w-86
            -translate-y-10 sm:-translate-y-14 md:translate-y-0
            rounded-xl
            border border-orange-500/20
            shadow-2xl
            drop-shadow-[0_30px_60px_rgba(255,140,0,0.4)]
          "
          />

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 rounded-full bg-orange-500/20 blur-3xl"></div>

        </div>
      </section>


      {/* ================= CLASSES ================= */}
      <section className="py-20 px-6 md:px-24 bg-black">
        <h2 className="text-4xl font-bold text-center mb-14">
          Classes We <span className="text-orange-500">Offer</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {["Class 9", "Class 10", "Class 11", "Class 12"].map((cls, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="w-full bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500 transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-orange-500">{cls}</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Complete CBSE Syllabus + Weekly Tests
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 md:px-24 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Students <span className="text-orange-500">Trust Us</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[{
            icon: <FaChalkboardTeacher size={35} />,
            title: "Expert Teaching"
          }, {
            icon: <FaBookOpen size={35} />,
            title: "Complete Study Material"
          }, {
            icon: <FaUsers size={35} />,
            title: "Live Doubt Support"
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-orange-500 transition"
            >
              <div className="text-orange-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-black text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-10"
        >
          <div>
            <h3 className="text-4xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-400">Students Taught</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500">95%</h3>
            <p className="text-gray-400">Board Results</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500">5+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </section>

      {/* ================= UPCOMING BATCH ================= */}
      <section className="py-20 bg-zinc-950 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Upcoming <span className="text-orange-500">Batch</span>
        </h2>

        <div className="max-w-xl mx-auto bg-black p-8 rounded-2xl border border-orange-500">
          <h3 className="text-2xl font-semibold mb-4">New Session Starting Soon</h3>
          <p className="text-gray-400 mb-6">
            Limited Seats Available | Live Interactive Classes | Recorded Backup
          </p>

          <Link
            to="/register"
            className="bg-orange-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Reserve Your Seat
          </Link>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-24 bg-black text-center px-6">
        <h2 className="text-4xl font-bold mb-12">
          What Students <span className="text-orange-500">Say</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl border border-zinc-800"
        >
          <p className="text-gray-400 text-lg">
            “This coaching completely changed my preparation level.
            Concepts are explained step-by-step and doubt sessions are very helpful.
            I improved my marks from 65% to 92%.”
          </p>
          <h4 className="mt-4 font-semibold text-orange-500">
            – Class 10 Student
          </h4>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-orange-500 text-black text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Start Learning Today 🚀
        </h2>
        <Link
          to="/register"
          className="bg-black text-orange-500 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-zinc-900 transition"
        >
          Enroll Now <IoRocket className="inline ml-2" />
        </Link>
      </section>

    </div>
  );
};

export default HomePage;
