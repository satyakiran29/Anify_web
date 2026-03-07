import React from 'react'

const Reviews = () => {
    const reviews = [
        {
            name: "Alex D.",
            role: "Customization Enthusiast",
            text: "This is hands down the best widget pack I've used. The animations are incredibly smooth and the styles are extremely versatile for any setup.",
            rating: 5
        },
        {
            name: "Sarah M.",
            role: "UI/UX Designer",
            text: "Absolutely stunning designs. The attention to detail in the typography and spacing of every widget is just perfect. A premium experience.",
            rating: 5
        },
        {
            name: "David K.",
            role: "Daily User",
            text: "I love how it transforms my home screen. It feels stable, doesn't drain the battery, and looks like a built-in native feature.",
            rating: 5
        }
    ]

    return (
        <section id="reviews" className="animate-fade-in" style={{ padding: '100px 24px', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '20px' }}>USER REVIEWS</h2>
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
                gap: '32px',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {reviews.map((r, i) => (
                    <div key={i} className="glass-card review-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        border: '1px solid var(--glass-border)',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ display: 'flex', gap: '4px', opacity: 0.9 }}>
                            {[...Array(r.rating)].map((_, j) => (
                                <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-color)" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            ))}
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                            "{r.text}"
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '0.5px' }}>{r.name}</h4>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'Geist Mono, monospace' }}>{r.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .review-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.2);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
                }
            `}</style>
        </section>
    )
}

export default Reviews
