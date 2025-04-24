import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from "react";

const BloodySite = function BloodySite() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <div className="p-6 max-w-4xl mx-auto">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Bloody</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 rounded"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>

        <section className="my-8">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p>
            Bloody is an alternative rap artist blending real-life thoughts with dark, dreamy soundscapes.
            This is placeholder text—swap in your bio anytime.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-semibold mb-2">Music</h2>
          <p>Embed your music player or link to your tracks here.</p>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Booking & collabs: bloody@example.com</p>
        </section>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BloodySite />);
