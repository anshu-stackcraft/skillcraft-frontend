import { FREE_CLASSES, getAllSubjectsForClass } from "../data/freeClasses";

const STORAGE_KEY = "skillcraft_video_links_v1";

function safeJsonParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function nowIso() {
  return new Date().toISOString();
}

function newId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function parseYouTubeId(input) {
  const raw = String(input ?? "").trim();
  if (!raw) return null;

  // Accept bare id (11-ish chars) as well.
  if (/^[a-zA-Z0-9_-]{8,15}$/.test(raw)) return raw;

  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{8,15})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{8,15})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{8,15})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{8,15})/,
  ];

  for (const p of patterns) {
    const m = raw.match(p);
    if (m?.[1]) return m[1];
  }

  return null;
}

export function loadVideoDB() {
  const db = safeJsonParse(localStorage.getItem(STORAGE_KEY), {});
  return typeof db === "object" && db ? db : {};
}

export function saveVideoDB(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

export function ensureVideoDBSeeded() {
  const db = loadVideoDB();
  let changed = false;

  for (const cls of FREE_CLASSES) {
    const classKey = String(cls.classId);
    if (!db[classKey] || typeof db[classKey] !== "object") {
      db[classKey] = {};
      changed = true;
    }

    const subjects = getAllSubjectsForClass(cls.classId);
    for (const subj of subjects) {
      if (!Array.isArray(db[classKey][subj.slug])) {
        db[classKey][subj.slug] = [];
        changed = true;
      }
    }
  }

  if (changed) saveVideoDB(db);
  return db;
}

export function listVideos(classId, subjectSlug) {
  const db = ensureVideoDBSeeded();
  const classKey = String(Number(classId));
  const list = db?.[classKey]?.[subjectSlug];
  return Array.isArray(list) ? list : [];
}

export function addVideo({ classId, subjectSlug, title, youtubeInput, chapter, description }) {
  const youtubeId = parseYouTubeId(youtubeInput);
  if (!youtubeId) {
    throw new Error("Invalid YouTube link / id");
  }

  const db = ensureVideoDBSeeded();
  const classKey = String(Number(classId));
  const list = db[classKey][subjectSlug];
  if (!Array.isArray(list)) {
    db[classKey][subjectSlug] = [];
  }

  const item = {
    id: newId(),
    title: String(title ?? "").trim() || "Untitled",
    youtubeId,
    chapter: chapter ? Number(chapter) : null,
    description: String(description ?? "").trim() || null,
    createdAt: nowIso(),
  };

  db[classKey][subjectSlug].unshift(item);
  saveVideoDB(db);
  return item;
}

export function deleteVideo({ classId, subjectSlug, videoId }) {
  const db = ensureVideoDBSeeded();
  const classKey = String(Number(classId));
  const list = db?.[classKey]?.[subjectSlug];
  if (!Array.isArray(list)) return false;

  const before = list.length;
  db[classKey][subjectSlug] = list.filter((v) => v.id !== videoId);
  saveVideoDB(db);
  return db[classKey][subjectSlug].length !== before;
}

