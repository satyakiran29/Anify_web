import React from 'react'
import { motion } from 'framer-motion'

const Reviews = () => {
    const reviews = [
        {
            name: "Krishna Vishwakarma",
            date: "17 May 2026",
            text: "Absolutely amazing app! The widgets and wallpapers look premium and aesthetic. Very smooth experience and easy to customize. My home screen looks so much better now.",
            rating: 5,
            avatarBg: "linear-gradient(135deg, var(--accent-blue) 0%, #00c6ff 100%)"
        },
        {
            name: "RONNIE",
            date: "3 May 2026",
            text: "very nice app increadible wallpapers and widgets",
            rating: 5,
            avatarBg: "linear-gradient(135deg, var(--accent-red) 0%, #ff7b00 100%)"
        },
        {
            name: "Subhodeep Ghosh",
            date: "1 May 2026",
            text: "Very smooth! transitions and feels premium with High quality widgets ❤️",
            rating: 5,
            avatarBg: "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)"
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
            avatarBg: "linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-red) 100%)"
        }
    ]

    return (
        <section id="reviews" style={{ padding: '120px 24px', position: 'relative' }}>
            {/* Background glow effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 59, 48, 0.05) 0%, transparent 70%)',
                filter: 'blur(55px)',
                pointerEvents: 'none'
            }}></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}
            >
                <h2 style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 3.2rem)', 
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '20px',
                    letterSpacing: '-1.5px'
                }}>
                    User Reviews
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-red))',
                    margin: '0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px rgba(0, 122, 255, 0.4)'
                }}></div>
                <p style={{
                    color: 'var(--text-secondary)',
                    marginTop: '20px',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '20px auto 0',
                    lineHeight: 1.6
                }}>
                    Here is what our community says about their experience personalizing their home screens with Anify.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {reviews.map((r, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="review-card" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            background: 'var(--bg-card)',
                            borderRadius: '20px',
                            padding: '32px',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                                fontWeight: '800',
                                fontSize: '1.15rem',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                flexShrink: 0
                            }}>
                                {r.name.charAt(0).toUpperCase()}
                            </div>
                            {/* Name, Date, Stars */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <h4 style={{ 
                                        fontSize: '1.08rem', 
                                        color: '#fff', 
                                        margin: 0,
                                        fontWeight: '700',
                                        letterSpacing: '-0.3px'
                                    }}>
                                        {r.name}
                                    </h4>
                                    <span style={{ 
                                        fontSize: '0.8rem', 
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {r.date}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '2px', opacity: 0.95 }}>
                                    {[...Array(5)].map((_, j) => (
                                        <svg 
                                            key={j} 
                                            width="15" 
                                            height="15" 
                                            viewBox="0 0 24 24" 
                                            fill={j < r.rating ? "var(--accent-blue)" : "rgba(255,255,255,0.12)"} 
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
                            color: '#cbd5e1', 
                            fontSize: '0.96rem', 
                            lineHeight: 1.6, 
                            margin: 0,
                            flexGrow: 1,
                            fontStyle: 'italic'
                        }}>
                            "{r.text}"
                        </p>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .review-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35), 0 0 25px rgba(0, 122, 255, 0.02);
                }
            `}</style>
        </section>
    )
}

export default Reviews
