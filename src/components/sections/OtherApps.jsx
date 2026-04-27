import React from 'react'

const OtherApps = () => {
    return (
        <section id="other-apps" style={{ padding: '80px 24px', position: 'relative' }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                borderRadius: '24px',
                padding: '48px 32px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <h2 style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '16px',
                    letterSpacing: '-1px'
                }}>
                    More from SKDev
                </h2>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    marginBottom: '32px',
                    lineHeight: 1.6
                }}>
                    Discover our full ecosystem of premium Android personalization applications, widgets, and custom experiences.
                </p>
                <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer" style={{
                    background: '#3b82f6',
                    color: '#fff',
                    padding: '16px 32px',
                    borderRadius: '30px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
                }}
                className="skdev-btn">
                    Visit Developer Website
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
            <style>{`
                .skdev-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4) !important;
                    background: #2563eb !important;
                }
            `}</style>
        </section>
    )
}

export default OtherApps
