import { Link } from "react-router-dom";
import { FREE_CLASSES } from "../../data/freeClasses";

export default function VideoLinksHome() {
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Video Links <span className="text-orange-500">Admin</span>
        </h1>
        <p className="mt-3 text-zinc-300">
          Add and manage YouTube video links for Class 9 to 12 (separate routes
          per class).
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_CLASSES.map((cls) => (
            <Link
              key={cls.classId}
              to={`/admin/video-links/${cls.classId}`}
              className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 hover:scale-[1.02] hover:border-orange-500 transition"
            >
              <div className="text-xl font-bold">{cls.title}</div>
              <div className="mt-2 text-sm text-zinc-300">Manage subjects</div>
              <div className="mt-4 text-orange-400 text-sm font-semibold">
                Open -&gt;
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-sm text-zinc-400">
          Direct routes:{" "}
          <span className="text-zinc-200">/admin/video-links/class9</span>,{" "}
          <span className="text-zinc-200">/admin/video-links/class10</span>,{" "}
          <span className="text-zinc-200">/admin/video-links/class11</span>,{" "}
          <span className="text-zinc-200">/admin/video-links/class12</span>
        </div>
      </div>
    </div>
  );
}

