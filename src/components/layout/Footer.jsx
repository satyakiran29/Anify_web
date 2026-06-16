import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{
            background: '#040508',
            borderTop: '1px solid var(--glass-border)',
            padding: '50px 24px',
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                alignItems: 'center'
            }}>
                {/* Brand and Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                        src="https://play-lh.googleusercontent.com/bPKAvR7DBW-HpogEDgSBBGsZ3rBpaX8ddP12EA54TIgmmenH7sFnT9xkNH5TjPvVXowfnLLOJnPzAbCb1u-T6Q=w480-h960-rw" 
                        alt="Anify Logo" 
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            border: '1px solid rgba(255,255,255,0.08)'
                        }} 
                    />
                    <span style={{ 
                        fontSize: '1.25rem', 
                        color: '#fff', 
                        fontFamily: "'Plus Jakarta Sans', sans-serif", 
                        fontWeight: 800,
                        letterSpacing: '-0.3px'
                    }}>
                        Anify
                    </span>
                </div>

                {/* Footer Navigation Links */}
                <div className="footer-links" style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <a href="https://t.me/skdev29" target="_blank" rel="noopener noreferrer">Telegram Community</a>
                    <a href="https://instagram.com/skdev29" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noopener noreferrer">Google Play Developer Page</a>
                </div>

                {/* Copyright & Credits */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#64748b',
                    fontSize: '0.85rem',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    marginTop: '8px'
                }}>
                    <div>&copy; {new Date().getFullYear()} Anify. All rights reserved.</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>Developed by <a href="https://psatyakiran.in" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 600 }} className="dev-credit-link">Satya Kiran</a></span>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-links a {
                    color: #94a3b8;
                    transition: color 0.2s ease;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 600;
                }
                .footer-links a:hover {
                    color: var(--accent-blue);
                }
                .dev-credit-link:hover {
                    color: var(--accent-blue) !important;
                }
            `}</style>
        </footer>
    )
}

export default Footer
