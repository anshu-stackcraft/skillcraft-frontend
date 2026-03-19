import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-indigo-600">SkillForge</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Programs</a>
          <a href="#" className="hover:text-indigo-600">Projects</a>
          <a href="#" className="hover:text-indigo-600">Mentors</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Build <span className="text-indigo-600">Real Skills</span>  
            With Real Projects
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Learn industry skills with mentorship, hands-on projects,
            and internship opportunities designed for students.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
              Explore Programs
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Watch Demo
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          className="rounded-xl shadow-lg"
          alt="students learning"
        />
      </section>

      {/* Features */}
      <section className="px-10 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Training
        </h3>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">
              Hands-On Projects
            </h4>
            <p className="text-gray-600">
              Work on real industry projects that build practical skills.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">
              Expert Mentors
            </h4>
            <p className="text-gray-600">
              Learn directly from experienced developers and industry mentors.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">
              Internship Opportunity
            </h4>
            <p className="text-gray-600">
              Get internship experience and certification after training.
            </p>
          </div>

        </div>
      </section>

      {/* Programs */}
      <section className="px-10 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">
          Popular Programs
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">Web Development</h4>
            <p className="text-gray-600 mb-4">
              HTML, CSS, JavaScript, React, Node
            </p>
            <button className="text-indigo-600 font-semibold">
              Learn More →
            </button>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">Data Science</h4>
            <p className="text-gray-600 mb-4">
              Python, Machine Learning, Data Analysis
            </p>
            <button className="text-indigo-600 font-semibold">
              Learn More →
            </button>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">Cyber Security</h4>
            <p className="text-gray-600 mb-4">
              Network security, ethical hacking basics
            </p>
            <button className="text-indigo-600 font-semibold">
              Learn More →
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-16 px-10">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Career Journey Today
        </h3>
        <p className="mb-6">
          Join thousands of students building real-world tech skills.
        </p>

        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 px-10 py-10">
        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">
              SkillForge
            </h4>
            <p>Learn real skills with real projects.</p>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Links</h4>
            <ul className="space-y-2">
              <li>Programs</li>
              <li>Internships</li>
              <li>Mentors</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <p>Email: info@skillforge.com</p>
            <p>Phone: +91 0000000000</p>
          </div>

        </div>
      </footer>

    </div>
  );
}