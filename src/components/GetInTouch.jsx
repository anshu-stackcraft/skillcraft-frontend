import { useState } from "react";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 bg-linear-to-br from-black via-zinc-900 to-black">
      <div className="w-full max-w-2xl bg-zinc-900 rounded-xl shadow-lg border border-orange-500 p-8">
        
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Have a project or question? Let’s connect.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded bg-black text-white border border-zinc-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded bg-black text-white border border-zinc-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-3 rounded bg-black text-white border border-zinc-700 focus:outline-none focus:border-orange-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-semibold py-3 rounded hover:bg-orange-600 transition active:scale-95 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
