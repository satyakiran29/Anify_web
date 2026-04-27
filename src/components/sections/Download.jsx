import React from 'react'
import { motion } from 'framer-motion'

const Download = () => {
    return (
        <section id="download" style={{
            padding: '120px 24px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, var(--accent-color), #ff2a00)',
                color: '#fff',
                padding: '80px 40px',
                width: '100%',
                maxWidth: '1200px',
                borderRadius: '32px',
                boxShadow: '0 30px 60px rgba(255, 80, 0, 0.25)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background shapes */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    background: '#ffffff',
                    opacity: 0.1,
                    filter: 'blur(40px)',
                    borderRadius: '50%'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '10%',
                    width: '200px',
                    height: '200px',
                    background: '#000000',
                    opacity: 0.2,
                    filter: 'blur(30px)',
                    borderRadius: '50%'
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '24px', color: '#fff' }}>READY TO UPGRADE?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '48px', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}>
                        Join thousands of users who have already transformed their home screens with Anify.
                    </p>
                    <div className="hero-buttons" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
                        <button style={{
                            background: '#050505',
                            color: '#fff',
                            padding: '18px 40px',
                            fontSize: '1rem',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                            transform: 'translateY(0)'
                        }}>
                            Google Play Store
                        </button>
                        <button style={{
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.3)',
                            padding: '18px 40px',
                            fontSize: '1rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Direct APK
                        </button>
                    </div>
                    <div style={{
                        background: 'rgba(0,0,0,0.2)',
                        padding: '16px 24px',
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <p><strong>Note:</strong> Anify focuses on curated stability.
                            For frequent updates and early access to new widgets, check out
                            <a href="#" style={{ textDecoration: 'underline', fontWeight: 'bold', marginLeft: '6px', color: '#fff' }}>AnisetPro</a>.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Download
