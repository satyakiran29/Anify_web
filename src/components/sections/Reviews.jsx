import React from 'react'
import { motion } from 'framer-motion'

const Reviews = () => {
    const reviews = [
        {
            name: "Krishna Vishwakarma",
            date: "17 May 2026",
            text: "Absolutely amazing app! The widgets and wallpapers look premium and aesthetic. Very smooth experience and easy to customize. My home screen looks so much better now.",
            rating: 5,
            avatarBg: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)"
        },
        {
            name: "RONNIE",
            date: "3 May 2026",
            text: "very nice app increadible wallpapers and widgets",
            rating: 5,
            avatarBg: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
        },
        {
            name: "Subhodeep Ghosh",
            date: "1 May 2026",
            text: "Very smooth! transitions and feels premium with High quality widgets ❤️",
            rating: 5,
            avatarBg: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)"
        },
        {
            name: "Helen Jones",
            date: "9 May 2026",
            text: "Not bad. More live wallpapers would be good",
            rating: 4,
            avatarBg: "linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)"
        },
        {
            name: "Veera Thijil",
            date: "28 April 2026",
            text: "good quality wallpapers👌",
            rating: 5,
            avatarBg: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)"
        },
        {
            name: "Ganesh Alla",
            date: "5 May 2026",
            text: "best app",
            rating: 5,
            avatarBg: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
        }
    ]

    return (
        <section id="reviews" style={{ padding: '100px 24px', position: 'relative' }}>
            {/* Background glow effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
            }}></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}
            >
                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '20px' }}>USER REVIEWS</h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'var(--accent-color)',
                    margin: '0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px var(--accent-glow)'
                }}></div>
                <p style={{
                    color: 'var(--text-secondary)',
                    marginTop: '20px',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '20px auto 0'
                }}>
                    Here is what our community says about their experience customizing with Anify.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '32px',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {reviews.map((r, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="glass-card review-card" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'var(--glass-blur)',
                            borderRadius: '16px',
                            padding: '28px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header info */}
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            {/* Avatar */}
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: r.avatarBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontWeight: '700',
                                fontSize: '1.2rem',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                flexShrink: 0
                            }}>
                                {r.name.charAt(0).toUpperCase()}
                            </div>
                            {/* Name, Date, Stars */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                                    <h4 style={{ 
                                        fontSize: '1.1rem', 
                                        color: 'var(--text-primary)', 
                                        margin: 0,
                                        letterSpacing: '0.3px',
                                        textTransform: 'none',
                                        fontFamily: 'inherit',
                                        fontWeight: '600'
                                    }}>
                                        {r.name}
                                    </h4>
                                    <span style={{ 
                                        fontSize: '0.8rem', 
                                        color: 'var(--text-secondary)',
                                        fontFamily: 'Geist Mono, monospace'
                                    }}>
                                        {r.date}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '2px', opacity: 0.9 }}>
                                    {[...Array(5)].map((_, j) => (
                                        <svg 
                                            key={j} 
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 24 24" 
                                            fill={j < r.rating ? "var(--accent-color)" : "rgba(255,255,255,0.15)"} 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Review text */}
                        <p style={{ 
                            color: '#e2e8f0', 
                            fontSize: '0.98rem', 
                            lineHeight: 1.6, 
                            margin: 0,
                            flexGrow: 1
                        }}>
                            "{r.text}"
                        </p>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .review-card {
                    box-shadow: var(--glass-shadow);
                }
                .review-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(139, 92, 246, 0.3) !important;
                    box-shadow: 0 12px 30px rgba(139, 92, 246, 0.15);
                }
            `}</style>
        </section>
    )
}

export default Reviews
