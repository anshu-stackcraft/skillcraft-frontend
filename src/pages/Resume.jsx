import { FaGithub, FaDownload, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";


function Resume() {
    return (
        <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black text-white px-6 py-12">
            <div className="max-w-4xl mx-auto bg-zinc-900/80 border mt-12 border-orange-500/30 rounded-2xl shadow-2xl p-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-orange-500">
                            Anshul Yadav
                        </h1>
                        <p className="text-zinc-400 mt-2">
                            Full Stack Developer (Django + React)
                        </p>
                    </div>

                    {/* Download Button */}
                    <a
                        href="/Anshul.pdf"
                        download
                        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-5 py-3 rounded-xl font-semibold transition-all active:scale-95 hover:scale-105"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                </div>

                {/* Contact */}
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm text-zinc-300">
                    <p className="flex items-center gap-2">
                        <FaPhone className="text-orange-500" /> +91 9756099928
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-orange-500" /> anshul.stackcraft@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                        <FaGlobe className="text-orange-500" /> my-website-tawny-xi.vercel.app
                    </p>
                    <p className="flex items-center gap-2">
                        <FaGithub className="text-orange-500" /> github.com/anshu-stackcraft
                    </p>
                </div>

                {/* Section */}
                <Section title="Objective">
                    Detail-oriented Full Stack Developer with strong backend expertise in
                    Django and hands-on experience in React. Skilled in building RESTful
                    APIs, integrating databases, and developing responsive web
                    applications.
                </Section>

                <Section title="Experience">
                    <p className="text-zinc-300">
                        <span className="text-orange-400 font-semibold">
                            Aug 2025 – Jan 2026
                        </span>
                        <br />
                        Worked extensively with React, Django, Django REST Framework, and JWT
                        authentication. Built full stack applications while continuously
                        improving backend and frontend skills.
                    </p>
                </Section>

                <Section title="Education">
                    <p className="text-zinc-300">
                        <span className="text-orange-400 font-semibold">
                            MSK !nstitute – Full Stack Development
                        </span>
                        <br />
                        Learning backend and frontend development for the last 1.2 years.
                    </p>
                </Section>

                <Section title="Projects">
                    <ul className="list-disc list-inside text-zinc-300 space-y-2">
                        <li>Developed full stack portfolio website using Django & React</li>
                        <li>Built RESTful APIs using Django REST Framework</li>
                        <li>JWT authentication & secure API integration</li>
                        <li>Responsive UI with Tailwind CSS</li>
                        <li>CRUD operations & database relationships</li>
                    </ul>
                </Section>

                <Section title="Communication Skills">
                    Strong verbal and written communication skills with the ability to
                    explain technical concepts clearly to both technical and
                    non-technical audiences.
                </Section>

                {/* Hire Me */}
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">
                        Hire Me <IoRocket className="inline ml-2" />
                    </h2>
                    <p className="text-zinc-400 mb-6">
                        Looking for a passionate Full Stack Developer? Let’s work together.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold text-orange-500 mb-3">
                {title}
            </h2>
            <div className="text-zinc-300 leading-relaxed">{children}</div>
        </div>
    );
}

export default Resume;
