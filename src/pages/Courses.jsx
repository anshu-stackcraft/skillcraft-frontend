import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-28 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Courses <span className="text-orange-500">Coming Soon</span>
        </h1>
        <p className="mt-4 text-zinc-300">
          We are organizing premium courses with notes, tests and live doubt
          support.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/freeclasses"
            className="bg-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-orange-400 transition"
          >
            Explore Free Classes
          </Link>
          <Link
            to="/register"
            className="border border-orange-500/30 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-900 transition"
          >
            Join Batch
          </Link>
        </div>
      </div>
    </div>
  );
}

