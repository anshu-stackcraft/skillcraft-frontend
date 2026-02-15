import { Link } from "react-router-dom";


function About() {


  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">
            msk instite 
          </h1>
          <p className="text-zinc-400 mt-2">
            Full Stack Developer (React + Django)
          </p>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6 text-white">

          <div>
            <h3 className="text-orange-500 font-semibold mb-1">🎓 Education</h3>
            <p className="text-zinc-300">
              Bachelor of Computer Applications (BCA)
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-1">📧 Email</h3>
             <a
              href="https://gmail"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:underline"
            >anshu.stackcraft@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-1">📱 Phone</h3>
            <p className="text-zinc-300">
              +91 9756099928
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-1">💻 GitHub</h3>
            <a
              href="https://github.com/anshu.stackcraft"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:underline"
            >github.com/anshu.stackcraft
            </a>
          </div>

        </div>

        {/* About Me */}
        <div className="mt-8">
          <h3 className="text-orange-500 font-semibold mb-2">
            👨‍💻 About Me
          </h3>
          <p className="text-zinc-300 leading-relaxed">
            I am a passionate full-stack developer skilled in React, Tailwind CSS,
            Django REST Framework and API integration. I love building clean UI
            and scalable backend systems.
          </p>
        </div>

        {/* Logout Button */}
        <div className="mt-10 text-center">
          <button>
            <Link className="bg-orange-500 hover:bg-orange-600  p-2 rounded-lg font-semibold transition-all duration-200" to='/logout'>Logout</Link>
          </button>
        </div>

      </div>
    </div>
  );
}

export default About;
