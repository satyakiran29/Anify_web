import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="hero" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '160px',
            paddingBottom: '120px',
            minHeight: '100vh',
            maxWidth: '1200px',
            margin: '0 auto',
            gap: '60px'
        }}>
            {/* Left Column */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: 1, maxWidth: '600px' }}
            >
                <h1 style={{
                    fontFamily: 'Inter, serif',
                    fontSize: 'clamp(4rem, 8vw, 6rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '16px',
                    color: '#fff',
                    letterSpacing: '-2px',
                    textShadow: '4px 4px 0px rgba(59, 130, 246, 0.5)' /* Blue shadow from second image vibe */
                }}>
                    Anify
                </h1>
                
                <h2 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: '24px',
                    color: '#e2e8f0',
                    letterSpacing: '-0.5px'
                }}>
                    Widgets, Wallpapers <br/>
                    <span style={{ color: '#3b82f6' }}>& Ringtones</span>
                </h2>

                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.15rem',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    marginBottom: '40px',
                    maxWidth: '480px'
                }}>
                    We have what you need! Unlock your limits with stunning home screen widgets, minimalist wallpapers, and custom ringtones to personalize your Android experience.
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'center'
                }}>
                    <a href="https://play.google.com/store/apps/details?id=com.skdev.anify" target="_blank" rel="noopener noreferrer" style={{
                        background: '#3b82f6',
                        color: '#fff',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '1rem',
                        boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download App
                    </a>

                    <a href="#features" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#fff',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '1rem',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}>
                        Explore Features
                    </a>
                </div>
            </motion.div>

            {/* Right Column: App Screenshots */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    minHeight: '600px'
                }}
            >
                {/* Back Image (Secondary) */}
                <motion.img 
                    initial={{ y: 20 }}
                    animate={{ y: [20, -10, 20] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    src="https://aniset.psatyakiran.in/assets/aniset-a5b9f150.png" 
                    alt="Anify App Screenshot Background" 
                    style={{
                        position: 'absolute',
                        left: '-10%',
                        top: '8%',
                        width: '280px',
                        height: '580px',
                        objectFit: 'cover',
                        borderRadius: '36px',
                        border: '6px solid #2a2b36',
                        transform: 'scale(0.9) rotate(-10deg)',
                        boxShadow: '-15px 20px 40px rgba(0,0,0,0.6)',
                        zIndex: 1,
                        filter: 'brightness(0.7)'
                    }}
                />

                {/* Front Image (Primary) */}
                <motion.img 
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    src="https://aniset.psatyakiran.in/assets/aniset-a5b9f150.png" 
                    alt="Anify App Screenshot" 
                    style={{
                        position: 'relative',
                        width: '300px',
                        height: '620px',
                        objectFit: 'cover',
                        borderRadius: '40px',
                        border: '8px solid #334155',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                        zIndex: 2,
                        transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                />
            </motion.div>

            <style>{`
                @media (max-width: 900px) {
                    #hero {
                        flex-direction: column !important;
                        text-align: center;
                        padding-top: 120px !important;
                    }
                    #hero > div:first-child {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    #hero h2 br {
                        display: none;
                    }
                    #hero p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    #hero > div:last-child {
                        width: 100%;
                        min-height: 500px;
                    }
                }
            `}</style>
        </section>
    )
}

export default Hero
