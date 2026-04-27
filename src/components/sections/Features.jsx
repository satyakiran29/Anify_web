import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
    const features = [
        {
            title: "Stunning Widgets",
            description: "From minimalist clocks to complex music players, over 10+ customizable widgets to reinvent your home screen.",
            gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            icon: "🔲"
        },
        {
            title: "Curated Wallpapers",
            description: "Hand-picked, high-quality wallpapers to perfectly match and complement your widget setups.",
            gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
            icon: "🖼️"
        },
        {
            title: "Premium Ringtones",
            description: "A growing library of unique ringtones and notification sounds to complete your customization.",
            gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
            icon: "🎵"
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
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '20px',
                    letterSpacing: '-1px'
                }}>
                    Unlock Your Limits
                </h2>
                <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'var(--accent-color)',
                    margin: '0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px var(--accent-glow)'
                }}></div>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {features.map((f, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        key={i} 
                        className="feature-card" 
                        style={{
                        background: '#1a1b23',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '24px',
                        padding: '40px 32px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                    }}>
                        {/* Ambient Glow Background */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '150px',
                            height: '150px',
                            background: f.gradient,
                            filter: 'blur(60px)',
                            opacity: 0.15,
                            borderRadius: '50%',
                            zIndex: 0,
                            transition: 'all 0.4s ease'
                        }} className="card-glow"></div>

                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: f.gradient,
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                            fontSize: '2rem'
                        }}>
                            {f.icon}
                        </div>

                        <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                            <h3 style={{ 
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '1.5rem', 
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '16px' 
                            }}>
                                {f.title}
                            </h3>
                            <p style={{ 
                                color: '#94a3b8', 
                                fontSize: '1.05rem', 
                                lineHeight: 1.7 
                            }}>
                                {f.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <style>{`
                .feature-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.15);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
                .feature-card:hover .card-glow {
                    opacity: 0.3 !important;
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    )
}

export default Features
