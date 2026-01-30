import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-wide">GO CEBU</h1>
          <a
            href="https://wa.me/639991721099"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Explore Cebu.
            <span className="block text-yellow-400">No stress.</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Reliable cars. Honest pricing. Hassle-free rentals & tours.
          </p>

          <div className="mt-6">
            <a
              href="https://wa.me/639991721099"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-yellow-400 text-black font-bold shadow-lg hover:scale-105 transition"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/cebu-destinations.png"
            alt="Cebu destinations"
            className="w-full h-80 object-cover"
          img/>
        </div>
      </main>
    </div>
  )
}
