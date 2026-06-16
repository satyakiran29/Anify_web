import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
    const features = [
        {
            title: "Instant Widgets",
            description: "No KWGT required. Place clocks, custom system/battery monitors, live network speed, and SIM/Wi-Fi data usage trackers right on your launcher.",
            gradient: "linear-gradient(135deg, var(--accent-blue), #00c6ff)",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9"></rect>
                    <rect x="14" y="3" width="7" height="5"></rect>
                    <rect x="14" y="12" width="7" height="9"></rect>
                    <rect x="3" y="16" width="7" height="5"></rect>
                </svg>
            )
        },
        {
            title: "BlockIt - Focus Lock",
            description: "Stay productive using Lockdown Mode to block distracting apps. Track your progress with a 7-day bar chart and anti-impulse 3-second hold to cancel.",
            gradient: "linear-gradient(135deg, var(--accent-red), #ff7b00)",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        },
        {
            title: "Aesthetic Wallpapers",
            description: "Browse minimal, AMOLED, and anime wallpapers. Includes the interactive 'Life Calendar' live wallpaper to display your year's progress day-by-day.",
            gradient: "linear-gradient(135deg, var(--accent-purple), #a78bfa)",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            )
        },
        {
            title: "Wallpaper Auto Changer",
            description: "Keep your screen fresh with automated rotating wallpaper pools. Configure custom day/night sets and local gallery photos with low battery drain.",
            gradient: "linear-gradient(135deg, #10b981, #34d399)",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
            )
        },
        {
            title: "Trending Ringtones",
            description: "Find and set unique custom ringtones, notification alerts, and alarm tones to perfectly match your personalization setup's audio style.",
            gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                </svg>
            )
        },
        {
            title: "Smart Utilities & Fun",
            description: "Control your music with interactive widgets, write sticky notes, manage Bluetooth details, toggle caffeine screen awake, and spin the bottle!",
            gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            )
        }
    ]

    return (
        <section id="features" style={{ padding: '120px 24px', position: 'relative' }}>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '80px' }}
            >
                <h2 style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 3.2rem)', 
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '20px',
                    letterSpacing: '-1.5px'
                }}>
                    Unlock Your Limits
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-red))',
                    margin: '0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px rgba(0, 122, 255, 0.4)'
                }}></div>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {features.map((f, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        key={i} 
                        className="feature-card" 
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {/* Glowing Background Radial */}
                        <div style={{
                            position: 'absolute',
                            top: '-60px',
                            right: '-60px',
                            width: '160px',
                            height: '160px',
                            background: f.gradient,
                            filter: 'blur(70px)',
                            opacity: 0.12,
                            borderRadius: '50%',
                            zIndex: 0,
                            transition: 'all 0.4s ease'
                        }} className="card-glow"></div>

                        {/* Icon Container */}
                        <div style={{
                            width: '56px',
                            height: '56px',
                            background: f.gradient,
                            color: '#fff',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                        }}>
                            {f.icon}
                        </div>

                        {/* Card Content */}
                        <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                            <h3 style={{ 
                                fontSize: '1.35rem', 
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '12px',
                                letterSpacing: '-0.5px'
                            }}>
                                {f.title}
                            </h3>
                            <p style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: '1.02rem', 
                                lineHeight: 1.6 
                            }}>
                                {f.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .feature-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(255, 255, 255, 0.1) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 122, 255, 0.05);
                }
                .feature-card:hover .card-glow {
                    opacity: 0.25 !important;
                    transform: scale(1.3);
                }
            `}</style>
        </section>
    )
}

export default Features
