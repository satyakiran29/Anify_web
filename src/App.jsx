import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import VideoGuide from './components/sections/VideoGuide'
import OtherApps from './components/sections/OtherApps'
import FAQ from './components/sections/FAQ'
import Community from './components/sections/Community'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import UnderDevelopment from './pages/UnderDevelopment'
import Changelog from './pages/Changelog'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ui/ScrollToTop'
import SEO from './components/ui/SEO'

function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Features />
      <VideoGuide />
      <OtherApps />
      <FAQ />
      <Community />
    </>
  )
}

function App() {
  // Toggle this to turn Under Development mode on or off
  const [isUnderDevelopment, setIsUnderDevelopment] = useState(false);
  const location = useLocation();

  if (isUnderDevelopment && location.pathname !== '/privacy-policy') {
    return <UnderDevelopment />;
  }

  return (
    <div className="app-container">
      <div className="dot-bg"></div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
