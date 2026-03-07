import React, { useState, useEffect } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            padding: '16px 24px',
            position: 'fixed',
            top: scrolled ? '10px' : '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 48px)',
            maxWidth: '1200px',
            zIndex: 100,
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            border: '1px solid var(--glass-border)',
            borderRadius: isMenuOpen ? '24px' : '100px',
            boxShadow: 'var(--glass-shadow)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    letterSpacing: '-1px',
                    zIndex: 101
                }}>
                    ANIFY<span style={{ color: 'var(--accent-color)' }}>.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul style={{
                        display: 'flex',
                        gap: '32px',
                        listStyle: 'none',
                        fontFamily: 'Geist Mono, monospace',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        margin: 0,
                        padding: 0
                    }}>
                        {/* <li><a href="#features">Features</a></li> */}
                        {/* <li><a href="#showcase">Showcase</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#download">Download</a></li>
                        <li><a href="#donate">Donate</a></li> */}
                        {/* <li><a href="#community">Community</a></li> */}
                    </ul>
                </nav>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', zIndex: 101 }}>
                    <button className="header-cta desktop-only" style={{
                        padding: '10px 20px',
                        href: "https://aniset.vercel.app/pro",
                        fontSize: '0.8rem',
                        clipPath: 'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)'
                    }}>
                        Get Pro
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                        style={{
                            padding: '8px',
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            clipPath: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            width: '40px',
                            height: '40px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: 'none',
                            boxShadow: 'none'
                        }}
                    >
                        <span style={{
                            width: '24px', height: '2px', background: 'currentColor',
                            transition: 'all 0.3s ease',
                            transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none'
                        }}></span>
                        <span style={{
                            width: '24px', height: '2px', background: 'currentColor',
                            transition: 'all 0.3s ease',
                            opacity: isMenuOpen ? 0 : 1
                        }}></span>
                        <span style={{
                            width: '24px', height: '2px', background: 'currentColor',
                            transition: 'all 0.3s ease',
                            transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'
                        }}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            <div className="mobile-nav-container" style={{
                maxHeight: isMenuOpen ? '300px' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                opacity: isMenuOpen ? 1 : 0,
                visibility: isMenuOpen ? 'visible' : 'hidden'
            }}>
                <nav style={{ padding: '24px 0 8px' }}>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        listStyle: 'none',
                        fontFamily: 'Geist Mono, monospace',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        margin: 0,
                        padding: 0
                    }}>
                        {/* <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li> */}
                        {/* <li><a href="#showcase" onClick={() => setIsMenuOpen(false)}>Showcase</a></li>
                        <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
                        <li><a href="#download" onClick={() => setIsMenuOpen(false)}>Download</a></li>
                        <li><a href="#donate" onClick={() => setIsMenuOpen(false)}>Donate</a></li> */}
                        {/* <li><a href="#community" onClick={() => setIsMenuOpen(false)}>Community</a></li> */}
                    </ul>
                    <button onClick={() => setIsMenuOpen(false)} style={{
                        width: '100%',
                        marginTop: '24px',
                        padding: '14px',
                        clipPath: 'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)'
                    }}>
                        Get Pro
                    </button>
                </nav>
            </div>

            <style>{`
                /* Hide desktop nav by default on mobile */
                .desktop-nav { display: none; }
                .mobile-nav-container { display: block; }
                .mobile-toggle { display: flex !important; }

                /* Desktop View */
                @media (min-width: 769px) {
                    .desktop-nav { display: block; }
                    .mobile-toggle, .mobile-nav-container { display: none !important; }
                    .desktop-only { display: block !important; }
                }

                /* Mobile View */
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                }
            `}</style>
        </header>
    )
}

export default Header
