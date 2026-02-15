import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "../services/profile";

const ProfilePage = () => {
  const { user, updateUser } = useAuth();

  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [preview, setPreview] = useState(user?.avatar || "/avatar.png");

  const [form, setForm] = useState({
    username: user?.username || "",
    email: user?.email || "",
    bio: user?.bio || "",
    avatar: null,
  });

  // 🧹 blob cleanup
  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const inputClass =
    "w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500";

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm((prev) => ({ ...prev, avatar: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async () => {
    setError("");

    if (!form.username || !form.email || !form.bio) {
      setError("All fields are required");
      return;
    }

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      setLoading(true);
      const res = await updateProfile(data);

      // 🔄 sync auth user
      updateUser(res.data);
      setEdit(false);
    } catch {
      setError("Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    setEdit(false);
    setForm({
      username: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
      avatar: null,
    });
    setPreview(user?.avatar || "/avatar.png");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-4 py-20 text-white">
      <div className="max-w-4xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 shadow-2xl">

        <h2 className="text-4xl font-bold text-center mb-12">
          Profile <span className="text-orange-500">Settings</span>
        </h2>

        {error && (
          <div className="mb-6 text-center text-red-400 bg-red-500/10 py-3 rounded-xl">
            {error}
          </div>
        )}

        {/* Avatar */}
        <div className="flex flex-col items-center mb-16">
          <img
            src={preview}
            className="w-40 h-40 rounded-full object-cover border-4 border-orange-500 shadow-lg"
          />

          {edit && (
            <label className="mt-5 cursor-pointer bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-xl font-semibold transition">
              Change Avatar
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleChange}
              />
            </label>
          )}
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <label className="text-sm text-zinc-400">Username *</label>
            {edit ? (
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className={inputClass}
              />
            ) : (
              <p className="mt-2 text-lg">{user?.username}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-zinc-400">Email *</label>
            {edit ? (
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            ) : (
              <p className="mt-2 text-lg">{user?.email}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-zinc-400">Bio *</label>
            {edit ? (
              <textarea
                name="bio"
                rows={4}
                value={form.bio}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            ) : (
              <p className="mt-2 text-zinc-300">
                {user?.bio || "No bio added yet"}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-16 flex justify-center gap-6">
          {edit ? (
            <>
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 px-12 py-3 rounded-xl text-black font-bold transition active:scale-95"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>

              <button
                onClick={cancelEdit}
                className="border border-zinc-600 px-12 py-3 rounded-xl hover:bg-zinc-800 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEdit(true)}
              className="bg-orange-500 hover:bg-orange-600 px-14 py-3 rounded-xl text-black font-bold transition active:scale-95"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
