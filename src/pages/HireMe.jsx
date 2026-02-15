import { Mail, Github, Linkedin, Briefcase } from "lucide-react";
import { IoRocket } from "react-icons/io5";

function HireMe() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-zinc-900 border mt-20 mb-10 border-orange-500/40 rounded-3xl shadow-2xl p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
          Hire Me <IoRocket className="inline ml-2" />
          </h1>
          <p className="text-zinc-400 text-lg">
            I build modern, fast & scalable web applications
          </p>
        </div>

        {/* About */}
        <div className="mb-8 text-center">
          <p className="text-zinc-300 leading-relaxed">
            I’m a <span className="text-orange-500 font-semibold">Full-Stack Developer</span>  
            passionate about building clean UI, secure backends, and smooth user
            experiences. If you’re looking for someone who can turn ideas into
            real products — I’m your guy.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-orange-500 mb-4 text-center">
            Skills & Tech
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "Django",
              "REST API",
              "JWT Auth",
              "MongoDB",
              "MySQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-black border border-zinc-700 text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Let’s work together
          </h3>
          <p className="text-zinc-400">
            Available for freelance, internships & full-time roles
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:anshu.stackcraft@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-600 transition active:scale-95 hover:scale-105"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href="https://github.com/anshu-stackcraft"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition active:scale-95 hover:scale-105"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anshul-yadav-7602ba320/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition active:scale-95 hover:scale-105"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="/resume"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition active:scale-95 hover:scale-105"
          >
            <Briefcase size={18} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
