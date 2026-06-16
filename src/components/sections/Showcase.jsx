import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import the key screenshots explaining the main features
import imgWidgets from '../../assets/app screenshots/03-device-top.png'
import imgFocusLock from '../../assets/app screenshots/07-device-top.png'
import imgLifeCalendar from '../../assets/app screenshots/05-hero.png'
import imgWallpapers from '../../assets/app screenshots/04-two-devices.png'
import imgAutoChanger from '../../assets/app screenshots/06-device-bottom.png'

const Showcase = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const slides = [
        {
            title: "WIDGETS",
            tabLabel: "Widgets",
            category: "Stunning home screen widgets to elevate your style.",
            description: "Enhance your Android device with a rich selection of custom widgets. Instantly place clocks, battery percentage indicators, Bluetooth status displays, network speed dials, and live system monitors directly on your launcher without needing third-party tools like KWGT.",
            img: imgWidgets,
            features: ["20+ standalone widget modules", "Real-time battery & network dials", "Aesthetic customization options"]
        },
        {
            title: "FOCUS LOCK",
            tabLabel: "Focus Lock",
            category: "Lock distracting apps and boost your productivity.",
            description: "Eliminate distracting phone impulses during work or study. Turn on Lockdown Mode to block social media and gaming applications. Choose your focus duration from 15 minutes to an hour, track your flow state over the last 7 days with interactive bar graphs, and use the anti-impulse hold to cancel.",
            img: imgFocusLock,
            features: ["Custom lockdown timer intervals", "7-day productivity history chart", "Anti-impulse cancel mechanism"]
        },
        {
            title: "LIFE CALENDAR",
            tabLabel: "Life Calendar",
            category: "See your year's progress day-by-day in a dot grid.",
            description: "Visualize your year's journey directly on your home screen. The interactive Life Calendar tracks your progress day-by-day in a beautiful, minimalist dot grid layout. Customize dot shapes, toggle 24-hour formats, show/hide seconds, and pick color accents to match your launcher setup.",
            img: imgLifeCalendar,
            features: ["Day-by-day dot progress tracking", "Accent colors & layout presets", "Live interactive wallpaper widget"]
        },
        {
            title: "HD WALLPAPERS",
            tabLabel: "Wallpapers",
            category: "AMOLED, minimal, and anime wallpapers to match your vibe.",
            description: "Express your unique style with Anify's premium background catalog. Browse categories ranging from ultra-dark AMOLED graphics to minimalist visual designs and colorful anime aesthetics. Match any widget setup perfectly with curated high-contrast wallpapers.",
            img: imgWallpapers,
            features: ["Curated anime & AMOLED artwork", "High-contrast design pairing", "Direct single-tap wallpaper apply"]
        },
        {
            title: "AUTO-CHANGER",
            tabLabel: "Auto-Changer",
            category: "Automatically rotate wallpapers and refresh your look.",
            description: "Never get bored of a single wallpaper again. Define a rotating background pool that changes automatically based on a set time interval (from 1 minute to daily). Set separate day and night wallpaper selections to match your environment while maintaining minimal battery impact.",
            img: imgAutoChanger,
            features: ["Interval-based background rotation", "Automatic Day & Night collections", "Zero-lag, battery-optimized scheduling"]
        }
    ]

    const handleNext = () => {
        setActiveTab((prev) => (prev + 1) % slides.length)
    }

    const handlePrev = () => {
        setActiveTab((prev) => (prev - 1 + slides.length) % slides.length)
    }

    // Keyboard controls for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return
            if (e.key === 'Escape') {
                setIsLightboxOpen(false)
            } else if (e.key === 'ArrowRight') {
                handleNext()
            } else if (e.key === 'ArrowLeft') {
                handlePrev()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isLightboxOpen])

    return (
        <section id="screenshots" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background Radial Glows */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}
            >
                <h2 style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 3.2rem)', 
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '16px',
                    letterSpacing: '-1.5px'
                }}>
                    Aesthetic In-App Showcase
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    Explore the interface layouts, custom widgets, and productivity modules of Anify.
                </p>
            </motion.div>

            {/* Showcase Container */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '40px',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Tabs Selector */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '6px',
                    borderRadius: '30px',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '100%'
                }} className="showcase-tabs-container">
                    {slides.map((slide, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            style={{
                                background: activeTab === idx ? 'linear-gradient(135deg, var(--accent-blue), #005bc4)' : 'transparent',
                                color: activeTab === idx ? '#fff' : '#94a3b8',
                                padding: '8px 18px',
                                borderRadius: '24px',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                border: 'none',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: activeTab === idx ? '0 4px 12px rgba(0, 122, 255, 0.25)' : 'none'
                            }}
                            className="showcase-tab-btn"
                        >
                            {slide.tabLabel}
                        </button>
                    ))}
                </div>

                {/* Display Split Layout */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '60px',
                    width: '100%',
                    marginTop: '10px',
                    flexWrap: 'wrap'
                }} className="showcase-content-grid">
                    
                    {/* Image / Graphic Display */}
                    <div style={{
                        flex: '1 1 450px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        maxWidth: '540px',
                        width: '100%'
                    }}>
                        <div 
                            onClick={() => setIsLightboxOpen(true)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '24px',
                                padding: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 122, 255, 0.03)',
                                position: 'relative',
                                overflow: 'hidden',
                                width: '100%',
                                cursor: 'zoom-in',
                                transition: 'transform 0.3s ease, border-color 0.3s ease'
                            }} 
                            className="showcase-img-card"
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeTab}
                                    src={slides[activeTab].img}
                                    alt={slides[activeTab].title}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35 }}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '16px',
                                        display: 'block',
                                        objectFit: 'contain'
                                    }}
                                />
                            </AnimatePresence>

                            {/* Arrow Navigation Overlays */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handlePrev()
                                }}
                                style={{
                                    position: 'absolute',
                                    left: '16px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(6, 7, 10, 0.7)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#fff',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    opacity: 0,
                                    transition: 'all 0.3s ease',
                                    zIndex: 10
                                }}
                                className="showcase-nav-arrow arrow-left"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleNext()
                                }}
                                style={{
                                    position: 'absolute',
                                    right: '16px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(6, 7, 10, 0.7)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#fff',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    opacity: 0,
                                    transition: 'all 0.3s ease',
                                    zIndex: 10
                                }}
                                className="showcase-nav-arrow arrow-right"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                            
                            {/* Hover Badge */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: 'rgba(6, 7, 10, 0.85)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                padding: '6px 12px',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                pointerEvents: 'none',
                                opacity: 0.9,
                                transition: 'opacity 0.3s ease'
                            }} className="expand-badge">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' }}>Click to Expand</span>
                            </div>
                        </div>
                    </div>

                    {/* Explanatory Info */}
                    <div style={{
                        flex: '1 2 400px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        maxWidth: '480px'
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.35 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                            >
                                <div style={{
                                    display: 'inline-flex',
                                    color: 'var(--accent-blue)',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase'
                                }}>
                                    {slides[activeTab].category}
                                </div>
                                <h3 style={{
                                    fontSize: '2.2rem',
                                    fontWeight: 800,
                                    color: '#fff',
                                    letterSpacing: '-0.8px',
                                    lineHeight: 1.15
                                }}>
                                    {slides[activeTab].title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.7
                                }}>
                                    {slides[activeTab].description}
                                </p>

                                {/* Features Checklist */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    marginTop: '8px'
                                }}>
                                    {slides[activeTab].features.map((feature, fIdx) => (
                                        <div key={fIdx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: fIdx === 0 ? 'var(--accent-blue)' : fIdx === 1 ? 'var(--accent-red)' : 'var(--accent-purple)',
                                                boxShadow: fIdx === 0 ? '0 0 8px var(--accent-blue)' : fIdx === 1 ? '0 0 8px var(--accent-red)' : '0 0 8px var(--accent-purple)'
                                            }}></span>
                                            <span style={{ fontSize: '0.92rem', color: '#cbd5e1', fontWeight: 600 }}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>


            </div>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(6, 7, 10, 0.96)',
                            backdropFilter: 'blur(16px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '24px'
                        }}
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                color: '#fff',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10000,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            className="lightbox-close"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handlePrev()
                            }}
                            style={{
                                position: 'absolute',
                                left: '24px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                color: '#fff',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10000,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            className="lightbox-nav-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        {/* Next button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleNext()
                            }}
                            style={{
                                position: 'absolute',
                                right: '24px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                color: '#fff',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10000,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            className="lightbox-nav-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>

                        {/* Main Image content wrapper */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '85vh',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '16px'
                            }}
                        >
                            <img
                                src={slides[activeTab].img}
                                alt={slides[activeTab].title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '72vh',
                                    borderRadius: '16px',
                                    boxShadow: '0 40px 100px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 122, 255, 0.15)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    objectFit: 'contain'
                                }}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 800, letterSpacing: '-0.3px' }}>
                                    {slides[activeTab].title}
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                    {slides[activeTab].category}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .showcase-tab-btn:hover {
                    color: #fff !important;
                }
                .showcase-img-card:hover {
                    transform: translateY(-2px) scale(1.01);
                    border-color: rgba(255, 255, 255, 0.12) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.65), 0 0 50px rgba(0, 122, 255, 0.06) !important;
                }
                .showcase-img-card:hover .showcase-nav-arrow {
                    opacity: 1 !important;
                }
                .showcase-nav-arrow:hover {
                    background: var(--accent-blue) !important;
                    border-color: var(--accent-blue) !important;
                    transform: translateY(-50%) scale(1.1) !important;
                }

                .lightbox-close:hover, .lightbox-nav-btn:hover {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                    transform: scale(1.05) !important;
                }
                .lightbox-close:active, .lightbox-nav-btn:active {
                    transform: scale(0.95) !important;
                }
                @media (max-width: 900px) {
                    .showcase-content-grid {
                        flex-direction: column !important;
                        text-align: center;
                        gap: 40px !important;
                    }
                    .showcase-content-grid > div {
                        max-width: 100% !important;
                        align-items: center;
                    }
                }
                @media (max-width: 600px) {
                    .showcase-tabs-container {
                        gap: 6px !important;
                        padding: 4px !important;
                        border-radius: 20px !important;
                    }
                    .showcase-tab-btn {
                        padding: 6px 12px !important;
                        font-size: 0.8rem !important;
                    }
                    .showcase-nav-arrow {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default Showcase
