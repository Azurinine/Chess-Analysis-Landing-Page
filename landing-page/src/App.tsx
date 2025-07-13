import { useState, FormEvent, JSX } from 'react';

export default function LandingPage(): JSX.Element {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10 space-y-10">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Smarter Chess Analysis</h1>
        <p className="text-lg text-gray-300">
          Reflect on your games, surface critical moments, and get personalized feedback powered by Stockfish + GPT.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded text-black w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Join Early Access
          </button>
        </form>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg">1. Import Your Game</h3>
            <p className="text-gray-400">Upload a PGN or paste from Lichess/Chess.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">2. Annotate Key Moves</h3>
            <p className="text-gray-400">Capture your thought process before the engine speaks</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">3. Get Feedback</h3>
            <p className="text-gray-400">AI-enhanced insights tailored to your annotations</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Why This Tool?</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-left">
          <li>✅ Combines LLMs with Stockfish for layered analysis</li>
          <li>✅ Encourages reflection before revealing evaluations</li>
          <li>✅ Supports self-tagging of critical moments</li>
          <li>✅ Lets you analyze variations and discover patterns</li>
        </ul>
      </section>

      {/* Who It's For */}
      <section className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Who It's For</h2>
        <p className="text-gray-300">
          Tournament players, coaches, and thoughtful improvers who want more than just a +0.3.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm">
        Built by a chess player • GitHub • Contact
      </footer>
    </div>
  );
}
