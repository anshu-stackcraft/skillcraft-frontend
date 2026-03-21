import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  addVideo,
  deleteVideo,
  ensureVideoDBSeeded,
  listVideos,
} from "../../services/videoStore";
import { getAllSubjectsForClass, getClassConfig } from "../../data/freeClasses";

function classIdFromParam(param) {
  const raw = String(param ?? "").trim().toLowerCase();
  if (raw.startsWith("class")) return Number(raw.replace("class", ""));
  return Number(raw);
}

export default function VideoLinksClass() {
  const { classId: classIdParam } = useParams();
  const classId = classIdFromParam(classIdParam);
  const cls = getClassConfig(classId);

  const subjects = useMemo(() => getAllSubjectsForClass(classId), [classId]);
  const [subjectSlug, setSubjectSlug] = useState(subjects[0]?.slug ?? "");
  const [title, setTitle] = useState("");
  const [youtubeInput, setYoutubeInput] = useState("");
  const [chapter, setChapter] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [version, setVersion] = useState(0);

  useEffect(() => {
    ensureVideoDBSeeded();
  }, []);

  const videos = useMemo(() => {
    void version;
    if (!subjectSlug) return [];
    return listVideos(classId, subjectSlug);
  }, [classId, subjectSlug, version]);

  if (!cls) return <Navigate to="/admin/video-links" replace />;

  const subjectName =
    subjects.find((s) => s.slug === subjectSlug)?.name ?? "Subject";

  function resetForm() {
    setTitle("");
    setYoutubeInput("");
    setChapter("");
    setDescription("");
  }

  function onAdd(e) {
    e.preventDefault();
    setError("");

    try {
      addVideo({
        classId,
        subjectSlug,
        title,
        youtubeInput,
        chapter,
        description,
      });
      resetForm();
      setVersion((v) => v + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add video");
    }
  }

  function onDelete(videoId) {
    deleteVideo({ classId, subjectSlug, videoId });
    setVersion((v) => v + 1);
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              {cls.title} <span className="text-orange-500">Video Links</span>
            </h1>
            <p className="mt-2 text-zinc-300">
              Add YouTube links for each subject. These are saved in browser
              localStorage.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/admin/video-links"
              className="border border-orange-500/30 px-4 py-2 rounded-xl text-sm hover:bg-zinc-900 transition"
            >
              All Classes
            </Link>
            <Link
              to={`/freeclasses/class/${cls.classId}`}
              className="border border-orange-500/30 px-4 py-2 rounded-xl text-sm hover:bg-zinc-900 transition"
            >
              View Public Page
            </Link>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-zinc-900/60 border border-orange-500/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold">Add Video</h2>

            <form onSubmit={onAdd} className="mt-5 space-y-4">
              <label className="block text-sm">
                <div className="text-zinc-300 mb-2">Subject</div>
                <select
                  value={subjectSlug}
                  onChange={(e) => setSubjectSlug(e.target.value)}
                  className="w-full bg-black/40 border border-orange-500/20 rounded-xl px-3 py-2 outline-none focus:border-orange-500"
                >
                  {subjects.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm">
                <div className="text-zinc-300 mb-2">Title</div>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Chapter 1 - Introduction"
                  className="w-full bg-black/40 border border-orange-500/20 rounded-xl px-3 py-2 outline-none focus:border-orange-500"
                  required
                />
              </label>

              <label className="block text-sm">
                <div className="text-zinc-300 mb-2">YouTube Link / ID</div>
                <input
                  value={youtubeInput}
                  onChange={(e) => setYoutubeInput(e.target.value)}
                  placeholder="Paste YouTube link (watch/shorts/youtu.be) or video id"
                  className="w-full bg-black/40 border border-orange-500/20 rounded-xl px-3 py-2 outline-none focus:border-orange-500"
                  required
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block text-sm">
                  <div className="text-zinc-300 mb-2">Chapter (optional)</div>
                  <input
                    value={chapter}
                    onChange={(e) => setChapter(e.target.value)}
                    placeholder="1"
                    inputMode="numeric"
                    className="w-full bg-black/40 border border-orange-500/20 rounded-xl px-3 py-2 outline-none focus:border-orange-500"
                  />
                </label>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-black px-4 py-2 rounded-xl font-semibold hover:bg-orange-400 transition"
                  >
                    Add
                  </button>
                </div>
              </div>

              <label className="block text-sm">
                <div className="text-zinc-300 mb-2">Description (optional)</div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short notes about this video"
                  rows={3}
                  className="w-full bg-black/40 border border-orange-500/20 rounded-xl px-3 py-2 outline-none focus:border-orange-500 resize-none"
                />
              </label>

              {error ? (
                <div className="text-sm text-red-300 border border-red-500/30 bg-red-500/10 rounded-xl p-3">
                  {error}
                </div>
              ) : null}
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold">
                {subjectName} <span className="text-orange-500">Playlist</span>
              </h2>
              <Link
                to={`/freeclasses/class/${cls.classId}/${subjectSlug}`}
                className="text-sm text-orange-400 hover:text-orange-300 transition"
              >
                Open public player -&gt;
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {videos.length === 0 ? (
                <div className="bg-zinc-900/40 border border-orange-500/10 rounded-2xl p-6 text-zinc-300">
                  No videos yet for this subject.
                </div>
              ) : (
                videos.map((v) => (
                  <div
                    key={v.id}
                    className="bg-zinc-900/60 border border-orange-500/10 rounded-2xl p-5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="font-semibold">{v.title}</div>
                      <div className="mt-1 text-xs text-zinc-400">
                        {v.chapter ? `Chapter ${v.chapter}` : "Video"} -{" "}
                        <span className="font-mono">{v.youtubeId}</span>
                      </div>
                      {v.description ? (
                        <div className="mt-2 text-sm text-zinc-200">
                          {v.description}
                        </div>
                      ) : null}
                    </div>

                    <button
                      type="button"
                      onClick={() => onDelete(v.id)}
                      className="shrink-0 border border-red-500/30 text-red-200 px-3 py-2 rounded-xl text-sm hover:bg-red-500/10 transition"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
