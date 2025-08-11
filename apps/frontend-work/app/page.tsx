import React from "react";

export default function Home() {
  return (
    <div className="bg-[#0f1115] text-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <div className="text-2xl font-bold text-blue-400">ExcaliDraw</div>
        <div className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="https://github.com/Aryan-205/ExcaliDraw" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="/login" className="hover:text-blue-400 border border-white hover:border-blue-400 rounded-lg px-4 py-2">Login</a>
          <a href="/login" className="bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition transform hover:scale-105 px-4 py-2">Signup</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6 py-20 bg-gradient-to-b from-[#0f1115] to-[#13151a]">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Draw. Collaborate. <span className="text-blue-400">Create.</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 mb-8">
          A real-time collaborative drawing tool for teams, creators, and dreamers.
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition transform hover:scale-105">
          Get Started
        </button>
      </section>

      {/* Preview Section */}
      <section className="flex justify-center py-12">
        <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 flex gap-4">
          <img
            src="/ExcaliDrawlogo.svg"
            alt="ExcaliDraw Preview"
            className="rounded-lg max-w-[20px] object-contain"
          />
          <button>ExcaliDraw</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-[#13151a]">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Real-time Collaboration",
              desc: "Draw with friends or colleagues instantly from anywhere in the world.",
              icon: "💬"
            },
            {
              title: "Clean & Minimal UI",
              desc: "Focus on your creativity with a distraction-free interface.",
              icon: "🎨"
            },
            {
              title: "Secure & Fast",
              desc: "Built with modern web technologies for speed and security.",
              icon: "⚡"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-blue-500 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Aryan Bola. All rights reserved.
      </footer>
    </div>
  );
}