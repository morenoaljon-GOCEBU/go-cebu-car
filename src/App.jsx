import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
  <div className="max-w-[1400px] mx-auto px-[10%] py-4 flex items-center justify-between">
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
      <main className="w-full">
  <div className="max-w-[1400px] mx-auto px-[10%] py-20 grid md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT */}
    <div>
      <h2 className="text-4xl md:text-6xl font-black leading-tight">
        Explore Cebu.
        <span className="block text-yellow-400">No stress.</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Reliable cars. Honest pricing. Hassle-free rentals & tours.
      </p>

      <div className="mt-8">
        <a
          href="https://wa.me/639991721099"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition"
        >
          Book via WhatsApp
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <div>
      <img
        src="/cebu-destinations.png"
        alt="Cebu destinations"
        className="w-full h-[420px] object-cover rounded-2xl"
      />
    </div>

  </div>
</main>

    </div>
  )
}
