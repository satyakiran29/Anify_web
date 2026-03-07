import React from 'react'

const Showcase = () => {
    const items = [
        { title: "WEATHER_MINIMAL", img: "/showcase1.png" },
        { title: "MUSIC_VIBRANT", img: "/anime.png" },
        { title: "CALENDAR_DOTS", img: "/showcase2.png" },
        { title: "SYSTEM_MONO", img: "/showcase1.png" }
    ]

    return (
        <section id="showcase" className="animate-fade-in" style={{ padding: '100px 24px', position: 'relative' }}>
            {/* Background Glows for the section */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '40vw',
                height: '40vw',
                background: 'var(--accent-color)',
                opacity: 0.05,
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                    marginBottom: '16px',
                    display: 'inline-block',
                    padding: '0 20px',
                    borderLeft: '4px solid var(--accent-color)',
                    borderRight: '4px solid var(--accent-anime)',
                }}>
                    SHOWCASE
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'Geist Mono, monospace', fontSize: '1rem', letterSpacing: '2px' }}>
                    [ EXPLORE THE DIVERSITY ]
                </p>
            </div>

            {/* Desktop Grid Layout / Mobile Scroll Layout */}
            <div className="showcase-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                position: 'relative',
                zIndex: 1,
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {items.map((item, index) => (
                    <div key={index} className="glass-card showcase-card" style={{
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        border: '1px solid var(--glass-border)'
                    }}>
                        {/* Inner Gradient Accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: index % 2 === 0
                                ? 'linear-gradient(90deg, var(--accent-color), transparent)'
                                : 'linear-gradient(90deg, var(--accent-anime), transparent)'
                        }}></div>

                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1', /* Force squared aspect for uniformity */
                            borderRadius: '12px',
                            overflow: 'hidden',
                            position: 'relative',
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}>
                            <img src={item.img} alt={item.title} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }} className="showcase-image" />
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '8px',
                            borderTop: '1px dashed rgba(255,255,255,0.1)'
                        }}>
                            <span style={{
                                fontFamily: 'Geist Mono, monospace',
                                fontSize: '0.85rem',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.5px'
                            }}>
                                {item.title}
                            </span>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                background: index % 2 === 1 ? 'var(--accent-anime)' : 'var(--accent-color)',
                                borderRadius: '50%',
                                boxShadow: `0 0 10px ${index % 2 === 1 ? 'rgba(139,92,246,0.6)' : 'rgba(255,80,0,0.6)'}`
                            }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .showcase-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.2);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .showcase-card:hover .showcase-image {
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    )
}

export default Showcase
