import { useState, FormEvent, JSX } from 'react';

export default function LandingPage(): JSX.Element {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-4 py-10 space-y-20 font-sans">
      <main className="w-full max-w-6xl flex flex-col items-center space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-400">Smarter ++ +Chess Analysis</h1>
          <p className="text-xl text-gray-300">
            Reflect on your games, surface critical moments, and get personalized feedback powered by Stockfish + GPT.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-md text-black w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Join Early Access
            </button>
          </form>
        </section>

        {/* How It Works */}
        <section className="w-full text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-blue-300">1. Import Your Game</h3>
              <p className="text-gray-400">Upload a PGN or paste from Lichess/Chess.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-blue-300">2. Annotate Key Moves</h3>
              <p className="text-gray-400">Capture your thought process before the engine speaks</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-blue-300">3. Get Feedback</h3>
              <p className="text-gray-400">AI-enhanced insights tailored to your annotations</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full max-w-4xl text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Why This Tool?</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-left text-gray-300 text-lg">
            <li>✅ Combines LLMs with Stockfish for layered analysis</li>
            <li>✅ Encourages reflection before revealing evaluations</li>
            <li>✅ Supports self-tagging of critical moments</li>
            <li>✅ Lets you analyze variations and discover patterns</li>
          </ul>
        </section>

        {/* Who It's For */}
        <section className="max-w-2xl text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Who It's For</h2>
          <p className="text-lg text-gray-300">
            Tournament players, coaches, and thoughtful improvers who want more than just a +0.3.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center">
        Built by a chess player • <a href="#" className="underline">GitHub</a> • <a href="#" className="underline">Contact</a>
      </footer>
    </div>
  );
}
