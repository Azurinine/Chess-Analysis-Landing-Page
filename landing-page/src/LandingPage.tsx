import React, { useState, FormEvent, JSX } from "react";
import { Analytics } from "@vercel/analytics/react"

export default function LandingPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-4 py-10 space-y-20 font-sans">
      <main className="w-full max-w-6xl flex flex-col items-center space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-400">Smarter Chess Analysis</h1>
          <p className="text-xl text-gray-300">
            Reflect on your games, surface critical moments, and get personalized feedback powered by Stockfish + GPT.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="https://forms.gle/8ohnZcf7QV8xmMyZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Be First to Know!
            </a>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full max-w-3xl text-center px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            When Was the Last Time You Actually Learned from Chess Analysis?
          </h2>
          <p>
            Chess analysis is one of the most important parts of getting better
            at the game, but most tools don’t actually help you improve. Real
            analysis isn’t just about spotting mistakes — it’s about
            understanding your thought process, identifying patterns, and
            learning from them over time.
          </p>
          <br />
          <p>
            Most tools show you evals, blunders, and missed wins, but they don’t
            offer any structure or guidance. They don’t connect to what you were
            thinking during the game, and they leave you to figure out what it
            all means on your own.
          </p>
          <br />
          <ul className="text-left text-gray-400 text-md space-y-2">
            <li>
              ❌ No connection between what you intended and what the engine
              evaluated
            </li>
            <li>
              ❌ You never revisit the same mistake across games, even though
              you repeat them
            </li>
            <li>
              ❌ The engine doesn't know who you are, or how you think: it just
              judges your move
            </li>
            <li>
              ❌ The experience isn’t personalized, reflective, or built to help
              you grow
            </li>
          </ul>
        </section>
        {/* How It Works */}
        <section className="w-full text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-blue-300">
                1. Import Your Game
              </h3>
              <p className="text-gray-400">
                Start with your game — PGN or Lichess/Chess.com — no extra setup
                needed.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-blue-300">
                2. Guided Reflection
              </h3>
              <p className="text-gray-400">
                You're guided through key positions to reflect on your thoughts
                and decisions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-blue-300">
                3. Get Tailored Feedback
              </h3>
              <p className="text-gray-400">
                AI-enhanced insights compare your reasoning with engine truth —
                personalized to you.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full max-w-4xl text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Why This Tool?</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-left text-gray-300 text-lg">
            <li>✅ Teaches you how to analyze — not just what to fix</li>
            <li>✅ Guides reflection at key moments, not just move-by-move</li>
            <li>
              ✅ Helps connect your intentions with the engine’s evaluation
            </li>
            <li>
              ✅ Tracks your growth and recurring blind spots across games
            </li>
          </ul>
        </section>

        {/* Who It's For */}
        <section className="max-w-2xl text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Who It's For</h2>
          <p className="text-lg text-gray-300">
            This tool is for players who want to think deeper, not just click
            “next move.” Whether you’re a tournament grinder, a coach helping
            students reflect, or a serious improver tired of shallow analysis —
            this is for you.
          </p>
        </section>
        {/* About Me */}
        <section className="max-w-2xl text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Why I’m Building This
          </h2>
          <p className="text-lg text-gray-300">
            I’ve played thousands of games online and reached 2200+, but I still
            struggle with one thing — consistent, useful analysis. Honestly,
            it’s hard. Most tools just throw engine lines at you. They don’t
            give you space to reflect before showing you the “right” move. That
            disconnect makes the process feel unproductive. If there were a tool
            that made analysis easier, guided reflection, and actually helped me
            understand my own thinking — I know I’d be improving faster after
            every single game.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center">
        Built by a chess player •{" "}
        <a
          href="https://forms.gle/8ohnZcf7QV8xmMyZ8"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Interest Form
        </a>{" "}
        •{" "}
        <a
          href="mailto:achintyaraism@gmail.com"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </footer>
      <Analytics />
    </div>
  );
}
