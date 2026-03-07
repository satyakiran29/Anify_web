import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Showcase from './components/sections/Showcase'
import Reviews from './components/sections/Reviews'
import OtherApps from './components/sections/OtherApps'
import Download from './components/sections/Download'
import Donation from './components/sections/Donation'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="app-container">
      <div className="dot-bg"></div>
      <Header />
      <main>
        <Hero />
        {/* <Features /> */}
        {/* <Showcase /> */}
        {/* <Reviews /> */}
        <OtherApps />
        {/* <Download /> */}
        {/* <Donation /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
