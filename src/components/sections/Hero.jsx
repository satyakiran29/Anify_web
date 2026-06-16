import React from 'react'
import { motion } from 'framer-motion'
import screenshot1 from '../../assets/screenshots/Screenshot 2026-05-25 141125.png'
import screenshot2 from '../../assets/screenshots/Screenshot 2026-05-25 141145.png'

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
            gap: '60px',
            position: 'relative'
        }}>
            {/* Background ambient lighting */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '350px',
                height: '350px',
                background: 'rgba(0, 122, 255, 0.15)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '350px',
                height: '350px',
                background: 'rgba(255, 59, 48, 0.1)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            {/* Left Column */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: 1, maxWidth: '600px', position: 'relative', zIndex: 2 }}
            >
                {/* Brand Tag */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    marginBottom: '24px',
                    backdropFilter: 'blur(8px)'
                }}>
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--accent-blue)',
                        boxShadow: '0 0 8px var(--accent-blue)'
                    }}></span>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#94a3b8',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Android Personalization & Productivity
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(4rem, 8vw, 5.8rem)',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    marginBottom: '20px',
                    color: '#fff',
                    letterSpacing: '-3px'
                }}>
                    Anify
                </h1>

                <h2 style={{
                    fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
                    fontWeight: 850,
                    lineHeight: 1.2,
                    marginBottom: '24px',
                    color: '#e2e8f0',
                    letterSpacing: '-1px'
                }}>
                    Stunning Widgets, Wallpapers <br />
                    <span style={{ 
                        background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-red))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>& Focus Blocker</span>
                </h2>

                <p style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '40px',
                    maxWidth: '500px'
                }}>
                    No KWGT required. Personalize your home screen with 20+ customizable aesthetic clocks, live system monitors, wallpapers, and customizable ringtones, while boosting your efficiency with the integrated app-blocking Focus Blocker.
                </p>

                {/* Call To Actions */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'center'
                }}>
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.skdev.anify" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            background: 'linear-gradient(135deg, var(--accent-blue), #005bc4)',
                            color: '#fff',
                            padding: '14px 28px',
                            borderRadius: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            boxShadow: '0 8px 24px rgba(0, 122, 255, 0.4)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            textDecoration: 'none'
                        }}
                        className="btn-download"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download App
                    </a>

                    <a 
                        href="https://play.google.com/store/apps/dev?id=9166037782169864125" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            color: '#fff',
                            padding: '14px 28px',
                            borderRadius: '30px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            textDecoration: 'none'
                        }}
                        className="btn-developer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4-2-2a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        Developer Apps
                    </a>
                </div>

                {/* Direct Play Store Trust Badges */}
                <div className="hero-badges" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginTop: '36px',
                    alignItems: 'center'
                }}>
                    <div
                        className="badge-pill"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            color: '#cbd5e1',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent-blue)">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span>4.8★ Rating</span>
                    </div>

                    <div
                        className="badge-pill"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            color: '#cbd5e1',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>100+ Installs</span>
                    </div>

                    <div
                        className="badge-pill"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            color: '#cbd5e1',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Verified Safe</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: App Mockups */}
            <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="hero-mockup-container"
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                {/* Secondary Mockup (Back) */}
                <motion.img
                    initial={{ y: 20 }}
                    animate={{ y: [20, -10, 20] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    src={screenshot2}
                    alt="Anify Secondary Screen"
                    className="mockup-back"
                    style={{
                        position: 'absolute',
                        objectFit: 'cover',
                        border: '5px solid #1c1d24',
                        transform: 'scale(0.9) rotate(-10deg)',
                        boxShadow: '-15px 20px 40px rgba(0,0,0,0.7)',
                        zIndex: 1,
                        filter: 'brightness(0.65) contrast(0.95)'
                    }}
                />

                {/* Primary Mockup (Front) */}
                <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    src={screenshot1}
                    alt="Anify Home Screen Dashboard"
                    className="mockup-front"
                    style={{
                        position: 'relative',
                        objectFit: 'cover',
                        border: '7px solid #282a36',
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                        zIndex: 2,
                        transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                />
            </motion.div>

            <style>{`
                .hero-mockup-container {
                    min-height: 560px;
                }
                .mockup-front {
                    width: 285px;
                    height: 570px;
                    border-radius: 36px;
                }
                .mockup-back {
                    width: 270px;
                    height: 540px;
                    border-radius: 34px;
                    left: -5%;
                    top: 8%;
                }
                .btn-download:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(0, 122, 255, 0.55) !important;
                    filter: brightness(1.1);
                }
                .btn-developer:hover {
                    transform: translateY(-2px);
                    background: rgba(255, 255, 255, 0.08) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                }
                .badge-pill:hover {
                    border-color: rgba(0, 122, 255, 0.25) !important;
                    background: rgba(0, 122, 255, 0.04) !important;
                    box-shadow: 0 4px 15px rgba(0, 122, 255, 0.1);
                    transform: translateY(-1px);
                }
                @media (max-width: 900px) {
                    #hero {
                        flex-direction: column !important;
                        text-align: center;
                        padding-top: 130px !important;
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
                    }
                    .hero-mockup-container {
                        min-height: 580px;
                        margin-top: 30px;
                    }
                    .hero-badges {
                        justify-content: center !important;
                    }
                    .mockup-back {
                        left: 10% !important;
                    }
                }
                @media (max-width: 768px) {
                    .hero-mockup-container {
                        min-height: 520px !important;
                    }
                    .mockup-front {
                        width: 245px !important;
                        height: 490px !important;
                        border-radius: 30px !important;
                    }
                    .mockup-back {
                        width: 230px !important;
                        height: 460px !important;
                        border-radius: 28px !important;
                        left: 8% !important;
                    }
                }
                @media (max-width: 480px) {
                    .hero-mockup-container {
                        min-height: 460px !important;
                    }
                    .mockup-front {
                        width: 210px !important;
                        height: 420px !important;
                        border-radius: 26px !important;
                        border-width: 5px !important;
                    }
                    .mockup-back {
                        width: 200px !important;
                        height: 400px !important;
                        border-radius: 24px !important;
                        border-width: 4px !important;
                        left: 6% !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default Hero
