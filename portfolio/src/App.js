import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
    <header className="py-10 text-center">
      <h1 className="text-4xl font-bold text-blue-700">Neha Manker</h1>
      <p className="text-lg text-gray-700 mt-2">
        React Native & AI-Powered Mobile Developer | 6+ Years Experience
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://github.com/nehamanker28"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nehamanker"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </header>

    <section className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="text-xl font-bold">AI Workout Planner</h3>
          <p className="text-gray-600 mt-2">
            React Native + OpenAI-based app that generates weekly workout plans based on fitness goals.
          </p>
          <a
            href="https://github.com/yourusername/ai-workout-planner"
            className="inline-block mt-4 text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Voice Note to Task App</h3>
          <p className="text-gray-600 mt-2">
            React Native app using Whisper API to convert voice notes into actionable to-dos.
          </p>
          <a
            href="https://github.com/yourusername/voice-note-task-app"
            className="inline-block mt-4 text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    <footer className="mt-20 text-center text-sm text-gray-500">
      &copy; 2025 Neha Manker. All rights reserved.
    </footer>
  </div>
  );
}

export default App;
