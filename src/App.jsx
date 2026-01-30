import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center py-[15vh]">
      
      {/* LUXURY EMBOSSED CONTAINER */}
      <div className="w-[70%] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100">

        {/* Header */}
        <header className="border-b">
          <div className="px-10 py-6 flex items-center justify-between">
            <h1 className="text-2xl font-extrabold tracking-wide">GO CEBU</h1>
            <a
              href="https://wa.me/639991721099"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-green-600 text-white font-semibold shadow-sm hover:shadow-md transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </header>

        {/* Hero */}
        <main className="px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Explore Cebu.
              <span className="block text-yellow-400">No stress.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Reliable cars. Honest pricing. Hassle-free rentals & tours —
              designed for comfort, ease, and peace of mind.
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/639991721099"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-9 py-4 rounded-full bg-yellow-400 text-black font-bold shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl overflow-hidden shadow-inner">
            <img
              src="/cebu-destinations.png"
              alt="Cebu destinations"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </main>
      </div>
    </div>
  )
}
