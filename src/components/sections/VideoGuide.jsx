import React from 'react';
import { motion } from 'framer-motion';

const VideoGuide = () => {
    return (
        <section id="guide" style={{ padding: '120px 24px', position: 'relative' }}>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '16px',
                    letterSpacing: '-1px'
                }}>
                    How to Setup Anify
                </h2>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Watch our quick tutorial to get started with applying widgets and customizing your home screen in seconds.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: '#1a1b23',
                borderRadius: '24px',
                padding: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                position: 'relative'
            }}>
                {/* Decorative dots like a macOS window */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', paddingLeft: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                </div>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                    background: '#09090b',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Placeholder for actual iframe or video tag */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3b82f6',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'rgba(59, 130, 246, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            border: '2px solid rgba(59, 130, 246, 0.5)'
                        }} className="play-btn">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                        <p style={{ marginTop: '20px', color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>
                            Insert YouTube/Vimeo embed link here
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* How to Apply Steps */}
            <div style={{
                maxWidth: '900px',
                margin: '40px auto 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
            }}>
                {[
                    { step: '01', title: 'Install KWGT Pro', desc: 'Anify requires KWGT Pro to function. Make sure it is installed from the Play Store first.' },
                    { step: '02', title: 'Add a Widget', desc: 'Long press your home screen, select Widgets, and drag an empty KWGT block onto your screen.' },
                    { step: '03', title: 'Apply Anify', desc: "Tap the empty widget block, open the 'Explore' tab, and select any widget from the Anify pack." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.15) }}
                        style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>{item.step}</div>
                        <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .play-btn:hover {
                    transform: scale(1.1);
                    background: rgba(59, 130, 246, 0.4) !important;
                }
            `}</style>
        </section>
    );
};

export default VideoGuide;
