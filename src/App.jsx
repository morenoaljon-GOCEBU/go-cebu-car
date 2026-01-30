import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-gray-900 flex items-middle justify-around py-[15vh]">
      
      {/* LUXURY EMBOSSED BOX */}
      <div className="w-[80%] bg-stone-50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-stone-200">

        {/* Header */}
       <header className="border-b border-stone-200">
  <div className="max-w-[1400px] mx-auto px-[10%] py-4 flex items-around">

    {/* BRAND ZONE */}
    <div className="flex-1">
      <div className="max-w-[920px] mx-auto text-around">
        
        <div className="text-4xl md:text-6xl font-black tracking-tight leading-none text-yellow-450 
            drop-shadow-[0_1px_0_rgba(0,0,0,0.9)]">
  Go Cebu Car Rental & Tours
</div>


      </div>
    </div>

    {/* CTA */}
    <div className="mx-auto flex items-left justify-around">
      <a
        href="https://wa.me/639991721099"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2.5 rounded-full bg-green-800 text-white font-semibold shadow-sm hover:shadow-md transition"
      >
        Chat on WhatsApp
      </a>
    </div>

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
                  className="inline-block px-8 py-4 rounded-full bg-yellow-400 text-black font-bold shadow-md hover:shadow-lg hover:scale-105 transition"
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
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </main>

      </div>
    </div>
  )
}
