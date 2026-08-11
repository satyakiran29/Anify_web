import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/#features" },
        { name: "Screenshots", path: "/#screenshots" },
        { name: "Developer Apps", path: "/#other-apps" },
        { name: "Changelog", path: "/changelog" },
        { name: "FAQ", path: "/#faq" },
        { name: "KWGT Removal", path: "/kwgtremove" }
    ]

    const handleNavClick = (path) => {
        setMobileMenuOpen(false);
        if (path.startsWith('/#') && location.pathname === '/') {
            const element = document.querySelector(path.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: scrolled ? '12px 24px' : '20px 24px',
            background: scrolled ? 'rgba(6, 7, 10, 0.75)' : 'transparent',
            backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
            boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo & Brand */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        src="https://play-lh.googleusercontent.com/bPKAvR7DBW-HpogEDgSBBGsZ3rBpaX8ddP12EA54TIgmmenH7sFnT9xkNH5TjPvVXowfnLLOJnPzAbCb1u-T6Q=w480-h960-rw"
                        alt="Anify Logo"
                        style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            boxShadow: '0 4px 12px rgba(0, 122, 255, 0.4)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    />
                    <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '1.45rem',
                        fontWeight: 800,
                        color: '#fff',
                        letterSpacing: '-0.5px',
                        background: 'linear-gradient(135deg, #fff 60%, #cbd5e1 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Anify
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{
                    display: 'flex',
                    gap: '28px',
                    alignItems: 'center'
                }}>
                    {navLinks.map((link, i) => (
                        link.path.startsWith('/#') ? (
                            <a
                                key={i}
                                href={link.path}
                                onClick={(e) => {
                                    if (location.pathname === '/') {
                                        e.preventDefault();
                                        handleNavClick(link.path);
                                    }
                                }}
                                style={{
                                    color: '#94a3b8',
                                    textDecoration: 'none',
                                    fontSize: '0.92rem',
                                    fontWeight: 600,
                                    transition: 'color 0.2s ease',
                                    padding: '6px 0'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                                onMouseOut={(e) => e.target.style.color = '#94a3b8'}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={i}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: '#94a3b8',
                                    textDecoration: 'none',
                                    fontSize: '0.92rem',
                                    fontWeight: 600,
                                    transition: 'color 0.2s ease',
                                    padding: '6px 0'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                                onMouseOut={(e) => e.target.style.color = '#94a3b8'}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Right Action Button */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div className="desktop-nav">
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.skdev.anify" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{
                                background: 'linear-gradient(135deg, var(--accent-blue), #005bc4)',
                                color: '#fff',
                                padding: '10px 22px',
                                borderRadius: '24px',
                                fontWeight: 700,
                                fontSize: '0.88rem',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 15px rgba(0, 122, 255, 0.35)',
                                border: '1px solid rgba(255,255,255,0.08)'
                            }}
                            className="download-btn-header"
                        >
                            Download App
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#fff',
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            display: 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 1001
                        }}
                    >
                        {mobileMenuOpen ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(10, 12, 17, 0.95)',
                    backdropFilter: 'var(--glass-blur)',
                    borderBottom: '1px solid var(--glass-border)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    animation: 'fadeInUp 0.3s ease-out'
                }}>
                    {navLinks.map((link, i) => (
                        link.path.startsWith('/#') ? (
                            <a
                                key={i}
                                href={link.path}
                                onClick={(e) => {
                                    if (location.pathname === '/') {
                                        e.preventDefault();
                                        handleNavClick(link.path);
                                    }
                                }}
                                style={{
                                    color: '#cbd5e1',
                                    textDecoration: 'none',
                                    fontSize: '1.05rem',
                                    fontWeight: 600,
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                                    display: 'block'
                                }}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={i}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: '#cbd5e1',
                                    textDecoration: 'none',
                                    fontSize: '1.05rem',
                                    fontWeight: 600,
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                                    display: 'block'
                                }}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.skdev.anify" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            background: 'linear-gradient(135deg, var(--accent-blue), #005bc4)',
                            color: '#fff',
                            padding: '14px 24px',
                            borderRadius: '24px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            textAlign: 'center',
                            textDecoration: 'none',
                            marginTop: '12px',
                            boxShadow: '0 4px 15px rgba(0, 122, 255, 0.4)'
                        }}
                    >
                        Download App
                    </a>
                </div>
            )}

            <style>{`
                .download-btn-header:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 122, 255, 0.5) !important;
                    filter: brightness(1.1);
                }
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: flex !important;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header
