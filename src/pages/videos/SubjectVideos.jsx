import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getClassConfig, getSubjectConfig } from "../../data/freeClasses";
import { ensureVideoDBSeeded, listVideos } from "../../services/videoStore";

function formatChapter(chapter) {
  if (!chapter) return null;
  const n = Number(chapter);
  if (!Number.isFinite(n)) return null;
  return `Chapter ${n}`;
}

export default function SubjectVideos() {
  const { classId, subjectSlug } = useParams();
  const cls = getClassConfig(classId);
  const subject = getSubjectConfig(classId, subjectSlug);

  ensureVideoDBSeeded();

  const [version, setVersion] = useState(0);
  const videos = useMemo(
    () => {
      void version;
      return listVideos(classId, subjectSlug);
    },
    [classId, subjectSlug, version],
  );

  const [selectedId, setSelectedId] = useState(null);
  const activeId = videos.some((v) => v.id === selectedId)
    ? selectedId
    : videos[0]?.id ?? null;

  if (!cls || !subject) return <Navigate to="/freeclasses" replace />;

  const active = videos.find((v) => v.id === activeId) ?? null;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
            {cls.title}{" "}
            <span className="text-orange-500">{subject.name}</span> Videos
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={`/freeclasses/class/${cls.classId}`}
              className="border border-orange-500/40 px-4 py-2 rounded-xl text-sm hover:bg-orange-500 hover:text-black transition"
            >
              Back to Subjects
            </Link>

            <Link
              to="/freeclasses"
              className="border border-orange-500/20 px-4 py-2 rounded-xl text-sm hover:bg-zinc-900 transition"
            >
              All Classes
            </Link>
          </div>
        </div>

        {videos.length === 0 ? (
          <div className="bg-zinc-900/60 border border-orange-500/20 rounded-2xl p-8 text-center">
            <p className="text-lg font-semibold">No videos added yet.</p>
            <p className="mt-2 text-zinc-300">
              Add YouTube links from the admin panel.
            </p>
            <div className="mt-6">
              <Link
                to={`/admin/video-links/${cls.classId}`}
                className="inline-flex items-center justify-center bg-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-orange-400 transition"
              >
                Add Video Links
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-orange-500/30 bg-black">
                {active ? (
                  <iframe
                    key={active.youtubeId}
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}`}
                    title={active.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : null}
              </div>

              {active ? (
                <div className="mt-5">
                  <div className="text-xl font-semibold">{active.title}</div>
                  <div className="mt-2 text-sm text-zinc-400">
                    {formatChapter(active.chapter)}
                  </div>
                  {active.description ? (
                    <div className="mt-3 text-zinc-200">{active.description}</div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="bg-zinc-900 rounded-xl p-4 max-h-[520px] overflow-y-auto border border-orange-500/20">
              {videos.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedId(v.id)}
                  className={[
                    "w-full text-left cursor-pointer p-3 rounded-lg mb-3 text-sm transition",
                    activeId === v.id
                      ? "bg-orange-500 text-black"
                      : "bg-zinc-800 hover:bg-zinc-700",
                  ].join(" ")}
                >
                  <div className="font-semibold">{v.title}</div>
                  <div className="mt-1 text-xs opacity-80">
                    {formatChapter(v.chapter) ?? "Video"}
                  </div>
                </button>
              ))}

              <button
                type="button"
                onClick={() => setVersion((v) => v + 1)}
                className="w-full mt-2 border border-orange-500/20 px-4 py-2 rounded-xl text-sm hover:bg-zinc-800 transition"
              >
                Refresh list
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
