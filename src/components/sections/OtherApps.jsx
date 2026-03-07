import React from 'react'

const OtherApps = () => {
    const apps = [
        {
            name: "AnisetKWGT",
            description: "The official app to download, manage, and customize your widgets seamlessly.",
            icon: "📱",
            link: "https://aniset.vercel.app",
            color: "var(--accent-color)"
        },
        {
            name: "Aniset Pro",
            description: "A complete overhaul of your system theme infused with beautiful anime aesthetics.",
            icon: "🎨",
            link: "https://aniset.vercel.app/pro",
            color: "var(--accent-anime)"
        }
    ]

    return (
        <section id="other-apps" className="animate-fade-in" style={{ padding: '100px 24px', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '20px' }}>More from SK Dev</h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'var(--text-secondary)',
                    margin: '0 auto',
                    borderRadius: '2px',
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
                {apps.map((app, i) => (
                    <a key={i} href={app.link} target="_blank" rel="noopener noreferrer" className="glass-card app-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        textDecoration: 'none',
                        border: '1px solid var(--glass-border)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Hover Gradient Effect */}
                        <div className="hover-glow" style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `radial-gradient(circle at top right, ${app.color}20, transparent 70%)`,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            zIndex: 0
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {app.icon}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0 }}>{app.name}</h3>
                        </div>

                        <p style={{ position: 'relative', zIndex: 1, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '8px' }}>
                            {app.description}
                        </p>

                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            marginTop: 'auto',
                            paddingTop: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            color: app.color,
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            letterSpacing: '0.5px'
                        }}>
                            View
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }} xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>

            <style>{`
                .app-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.2);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                }
                .app-card:hover .hover-glow {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    )
}

export default OtherApps
