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
        { name: "Changelog", path: "/changelog" },
        { name: "FAQ", path: "/#faq" }
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
            transition: 'all 0.3s ease',
            padding: scrolled ? '15px 24px' : '24px',
            background: scrolled ? 'rgba(15, 16, 20, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        src="https://play-lh.googleusercontent.com/jx1tzenU6YSJJuW8we6lg-0qqgjv9v-UnH6wBPyY1qXlqNRgzaoZGAaflLcaXMV7APcLRlhH6nz3g9BCf8idlKA=w240-h480-rw"
                        alt="Anify Logo"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
                        }}
                    />
                    <span style={{
                        fontFamily: 'Inter, serif',
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '-0.5px'
                    }}>
                        Anify
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{
                    display: 'flex',
                    gap: '32px',
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
                                    color: '#e2e8f0',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, sans-serif',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                                onMouseOut={(e) => e.target.style.color = '#e2e8f0'}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={i}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: '#e2e8f0',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, sans-serif',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                                onMouseOut={(e) => e.target.style.color = '#e2e8f0'}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Right Actions */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {/* Download Button Desktop */}
                    <div className="desktop-nav">
                        <a href="https://play.google.com/store/apps/details?id=com.skdev.anify" target="_blank" rel="noopener noreferrer" style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: '#3b82f6',
                            padding: '10px 24px',
                            borderRadius: '20px',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                            onMouseOver={(e) => {
                                e.target.style.background = '#3b82f6';
                                e.target.style.color = '#fff';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                                e.target.style.color = '#3b82f6';
                            }}>
                            Download
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            display: 'none',
                            zIndex: 1001
                        }}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
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
                    background: '#0f1014',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
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
                                    color: '#e2e8f0',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, sans-serif',
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
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
                                    color: '#e2e8f0',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, sans-serif',
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <a href="https://play.google.com/store/apps/details?id=com.skdev.anify" target="_blank" rel="noopener noreferrer" style={{
                        background: '#3b82f6',
                        color: '#fff',
                        padding: '14px 24px',
                        borderRadius: '20px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '1rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        marginTop: '12px'
                    }}>
                        Download App
                    </a>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header
