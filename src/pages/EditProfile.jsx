import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "../services/profile";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [preview, setPreview] = useState(user?.avatar || "/avatar.png");

  const [form, setForm] = useState({
    username: user?.username || "",
    email: user?.email || "",
    bio: user?.bio || "",
    avatar: null,
  });

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white text-black border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500";

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm({ ...form, avatar: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.email || !form.bio) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);
    const data = new FormData();

    Object.keys(form).forEach((key) => {
      if (form[key]) data.append(key, form[key]);
    });

    try {
      const res = await updateProfile(data);
      setUser(res.data); // ✅ update auth user
      navigate("/profile");
    } catch (err) {
      setError("Profile update failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-zinc-900 p-12 rounded-3xl shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          Edit <span className="text-orange-500">Profile</span>
        </h2>

        {/* ERROR */}
        {error && (
          <div className="mb-6 text-center text-red-500 bg-red-500/10 py-3 rounded-xl">
            {error}
          </div>
        )}

        {/* AVATAR */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={preview}
            className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
          />

          <label className="mt-4 cursor-pointer bg-white text-black px-5 py-2 rounded-xl text-sm font-medium">
            Change Avatar
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              hidden
            />
          </label>
        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="text-sm text-zinc-400 mb-1 block">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className={inputClass}
              placeholder="Username"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-1 block">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm text-zinc-400 mb-1 block">
            Bio <span className="text-red-500">*</span>
          </label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell something about yourself..."
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full mt-10 bg-orange-500 text-black py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
