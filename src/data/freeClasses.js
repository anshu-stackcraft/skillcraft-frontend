export const FREE_CLASSES = [
  {
    classId: 9,
    title: "Class 9",
    type: "flat",
    subjects: [
      { name: "Hindi", slug: "hindi" },
      { name: "English", slug: "english" },
      { name: "Maths", slug: "maths" },
      { name: "SST", slug: "sst" },
      { name: "Science", slug: "science" },
    ],
  },
  {
    classId: 10,
    title: "Class 10",
    type: "flat",
    subjects: [
      { name: "Hindi", slug: "hindi" },
      { name: "English", slug: "english" },
      { name: "Maths", slug: "maths" },
      { name: "SST", slug: "sst" },
      { name: "Science", slug: "science" },
    ],
  },
  {
    classId: 11,
    title: "Class 11",
    type: "grouped",
    groups: [
      {
        title: "Science",
        subjects: [
          { name: "Physics", slug: "physics" },
          { name: "Chemistry", slug: "chemistry" },
          { name: "Mathematics", slug: "maths" },
          { name: "Biology", slug: "biology" },
          { name: "Computer Science", slug: "computer-science" },
        ],
      },
      {
        title: "Commerce",
        subjects: [
          { name: "Accountancy", slug: "accountancy" },
          { name: "Business Studies", slug: "business-studies" },
          { name: "Economics", slug: "economics" },
        ],
      },
      {
        title: "Arts / Humanities",
        subjects: [
          { name: "History", slug: "history" },
          { name: "Political Science", slug: "political-science" },
          { name: "Geography", slug: "geography" },
          { name: "Sociology", slug: "sociology" },
          { name: "Psychology", slug: "psychology" },
        ],
      },
      {
        title: "Common Subjects",
        subjects: [
          { name: "English", slug: "english" },
          { name: "Hindi", slug: "hindi" },
        ],
      },
    ],
  },
  {
    classId: 12,
    title: "Class 12",
    type: "grouped",
    groups: [
      {
        title: "Science",
        subjects: [
          { name: "Physics", slug: "physics" },
          { name: "Chemistry", slug: "chemistry" },
          { name: "Mathematics", slug: "maths" },
          { name: "Biology", slug: "biology" },
        ],
      },
      {
        title: "Commerce",
        subjects: [
          { name: "Accountancy", slug: "accountancy" },
          { name: "Business Studies", slug: "business-studies" },
          { name: "Economics", slug: "economics" },
        ],
      },
      {
        title: "Arts / Humanities",
        subjects: [
          { name: "History", slug: "history" },
          { name: "Political Science", slug: "political-science" },
          { name: "Geography", slug: "geography" },
          { name: "Sociology", slug: "sociology" },
          { name: "Psychology", slug: "psychology" },
        ],
      },
      {
        title: "Common Subjects",
        subjects: [
          { name: "English", slug: "english" },
          { name: "Hindi", slug: "hindi" },
        ],
      },
    ],
  },
];

export function getClassConfig(classId) {
  const id = Number(classId);
  return FREE_CLASSES.find((c) => c.classId === id) ?? null;
}

export function getAllSubjectsForClass(classId) {
  const cfg = getClassConfig(classId);
  if (!cfg) return [];

  if (cfg.type === "flat") return cfg.subjects;

  const subjects = [];
  for (const group of cfg.groups) subjects.push(...group.subjects);
  return subjects;
}

export function getSubjectConfig(classId, subjectSlug) {
  const subjects = getAllSubjectsForClass(classId);
  return subjects.find((s) => s.slug === subjectSlug) ?? null;
}
