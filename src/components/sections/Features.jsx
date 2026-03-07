import React from 'react'

const Features = () => {
    const features = [
        {
            title: "Limitless Styles",
            description: "From Nothing OS monochrome to vibrant Anime themes and Material You.",
            gradient: "linear-gradient(135deg, #ff5000, #ff7a00)"
        },
        {
            title: "Universal Widgets",
            description: "Weather, Music, Calendar, or System Info—Anify has it for anything.",
            gradient: "linear-gradient(135deg, #8b5cf6, #d946ef)"
        },
        {
            title: "Stability First",
            description: "Built for reliability with curated, less frequent updates to ensure your home screen stays perfect.",
            gradient: "linear-gradient(135deg, #10b981, #3b82f6)"
        }
    ]

    return (
        <section id="features" className="animate-fade-in" style={{ padding: '120px 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '20px' }}>CORE FEATURES</h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'var(--accent-color)',
                    margin: '0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px var(--accent-glow)'
                }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px'
            }}>
                {features.map((f, i) => (
                    <div key={i} className="glass-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        position: 'relative',
                        overflow: 'hidden'
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
                            opacity: 0.25,
                            borderRadius: '50%',
                            zIndex: 0,
                            transition: 'all 0.4s ease'
                        }} className="card-glow"></div>

                        <div style={{
                            width: '56px',
                            height: '56px',
                            background: f.gradient,
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                        }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: '#fff',
                                clipPath: 'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)'
                            }}></div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', letterSpacing: '0' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>{f.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .glass-card:hover .card-glow {
                    opacity: 0.5 !important;
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    )
}

export default Features
