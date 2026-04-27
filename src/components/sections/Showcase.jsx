import React from 'react'
import { motion } from 'framer-motion'

const Showcase = () => {
    // Array of placeholder screenshot paths
    const screenshots = [
        { title: "Home Screen", img: "https://via.placeholder.com/300x600/1a1b23/3b82f6?text=Home+Screen" },
        { title: "Widget Setup", img: "https://via.placeholder.com/300x600/1a1b23/8b5cf6?text=Widgets" },
        { title: "Wallpapers", img: "https://via.placeholder.com/300x600/1a1b23/ec4899?text=Wallpapers" },
        { title: "Ringtones", img: "https://via.placeholder.com/300x600/1a1b23/10b981?text=Ringtones" }
    ]

    return (
        <section id="screenshots" style={{ padding: '120px 24px', position: 'relative' }}>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}
            >
                <h2 style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '16px',
                    letterSpacing: '-1px'
                }}>
                    App Screenshots
                </h2>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    A glimpse into the beautiful and intuitive interface of Anify.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '32px',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {screenshots.map((item, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="screenshot-card" 
                        style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '9/19',
                            background: '#1a1b23',
                            borderRadius: '32px',
                            padding: '8px',
                            border: '4px solid #2a2b36',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }} className="phone-frame">
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                background: '#09090b',
                                position: 'relative'
                            }}>
                                <img src={item.img} alt={item.title} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                                {/* Phone Notch Mockup */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '40%',
                                    height: '24px',
                                    background: '#2a2b36',
                                    borderBottomLeftRadius: '12px',
                                    borderBottomRightRadius: '12px'
                                }}></div>
                            </div>
                        </div>
                        <h3 style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#e2e8f0'
                        }}>
                            {item.title}
                        </h3>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .phone-frame:hover {
                    transform: translateY(-15px);
                    border-color: #3b82f6;
                    box-shadow: 0 30px 60px rgba(59, 130, 246, 0.2);
                }
            `}</style>
        </section>
    )
}

export default Showcase
