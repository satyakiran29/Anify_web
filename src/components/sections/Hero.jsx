import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date("2026-03-31T00:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
                HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
                MINS: Math.floor((difference / 1000 / 60) % 60),
                SECS: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = { DAYS: 0, HOURS: 0, MINS: 0, SECS: 0 };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <section id="hero" className="animate-fade-in" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '160px', /* Increased to account for floating header */
            paddingBottom: '120px'
        }}>
            <h1 className="animate-delay-1" style={{
                fontSize: 'clamp(3.5rem, 12vw, 7rem)',
                lineHeight: 0.9,
                marginBottom: '32px',
                background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 10px 20px rgba(255,255,255,0.1))'
            }}>
                ANYTHING<br />
                <span style={{
                    background: 'linear-gradient(135deg, var(--accent-color), var(--accent-anime))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>ANYWHERE</span>
            </h1>
            <p className="animate-delay-2" style={{
                maxWidth: '650px',
                fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                lineHeight: 1.8
            }}>
                Minimalist, colorful, or anime-inspired. Anify brings beautifully crafted widgets for anything you need, right to your home screen.
            </p>

            {/* Countdown Timer */}
            <div className="animate-delay-3" style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '48px',
                padding: '16px 24px',
                background: 'rgba(20,20,20,0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-color)', color: '#fff', fontSize: '0.7rem', padding: '2px 10px', borderRadius: '10px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Releasing 31/03/26</div>
                {Object.keys(timeLeft).map((interval, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', fontFamily: 'Geist Mono, monospace', lineHeight: 1 }}>
                            {String(timeLeft[interval]).padStart(2, '0')}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', letterSpacing: '1px' }}>
                            {interval}
                        </span>
                    </div>
                ))}
            </div>

            <div className="hero-buttons animate-delay-3" style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '100px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <button style={{
                    padding: '18px 36px',
                    fontSize: '1.05rem',
                    background: 'linear-gradient(135deg, var(--accent-color), #ff7a00)',
                    boxShadow: '0 10px 30px var(--accent-glow)'
                }}>
                    Download Now
                </button>
                <button style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-primary)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '18px 36px',
                    fontSize: '1.05rem',
                    backdropFilter: 'var(--glass-blur)'
                }}>
                    View Widgets
                </button>
            </div>

            <div style={{
                maxWidth: '1000px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'floatElement 6s ease-in-out infinite',
                position: 'relative',
                zIndex: 2
            }}>
                {/* <img src="/hero.png" alt="Anify Hero Mockup" style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))'
                }} /> */}
            </div>
        </section>
    )
}

export default Hero
