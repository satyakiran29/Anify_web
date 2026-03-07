import React from 'react'

const Donation = () => {
    return (
        <section id="donate" className="animate-fade-in" style={{ padding: '80px 24px', position: 'relative' }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                padding: '60px 40px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--glass-shadow)'
            }}>
                {/* Background glow for the card */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: '60%',
                    background: 'var(--accent-anime)',
                    opacity: 0.1,
                    filter: 'blur(60px)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '64px',
                        height: '64px',
                        background: 'rgba(255,80,0,0.1)',
                        borderRadius: '50%',
                        marginBottom: '24px',
                        color: 'var(--accent-color)',
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor" />
                        </svg>
                    </div>

                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                        Support the Project
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        marginBottom: '40px',
                        maxWidth: '500px',
                        margin: '0 auto 40px'
                    }}>
                        Anify is a passion project built for the community. If you enjoy using these widgets and want to support future updates, consider buying me a coffee!
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://ko-fi.com/" target="_blank" rel="noopener noreferrer" className="donate-btn" style={{
                            padding: '16px 32px',
                            background: 'var(--accent-color)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 20px rgba(255,80,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi" style={{ height: '24px' }} />
                            Buy me a Coffee
                        </a>
                        <a href="https://paypal.me/" target="_blank" rel="noopener noreferrer" className="donate-btn-outline" style={{
                            padding: '16px 32px',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            PayPal
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .donate-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(255,80,0,0.4);
                    filter: brightness(1.1);
                }
                .donate-btn-outline:hover {
                    background: rgba(255,255,255,0.1);
                    transform: translateY(-3px);
                }
            `}</style>
        </section>
    )
}

export default Donation
