import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', fontWeight: 'bold' }}>GO CEBU</header>
      <main style={{ padding: '20px' }}>
        <h1>Explore Cebu. No stress.</h1>
        <p>Reliable cars. Honest pricing. Hassle-free rentals & tours.</p>
        <img src="/cebu-destinations.jpg" alt="Cebu destinations" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        <a href="https://wa.me/639991721099" target="_blank">
          <button style={{ marginTop: '20px', padding: '15px', fontSize: '16px' }}>
            Chat on WhatsApp
          </button>
        </a>
      </main>
    </div>
  )
}
