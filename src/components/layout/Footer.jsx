import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{
            background: '#040405',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '40px 24px',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'center'
            }}>
                {/* Brand and Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                        src="https://play-lh.googleusercontent.com/jx1tzenU6YSJJuW8we6lg-0qqgjv9v-UnH6wBPyY1qXlqNRgzaoZGAaflLcaXMV7APcLRlhH6nz3g9BCf8idlKA=w240-h480-rw" 
                        alt="Anify Logo" 
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }} 
                    />
                    <span style={{ 
                        fontSize: '1.2rem', 
                        color: '#fff', 
                        fontFamily: 'Inter, serif', 
                        fontWeight: 800
                    }}>
                        Anify
                    </span>
                </div>

                {/* Links */}
                <div className="footer-links" style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                    <a href="https://t.me/anify_app" target="_blank" rel="noopener noreferrer">Telegram</a>
                    <a href="https://instagram.com/skdev1" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>

                {/* Copyright & Bottom Bar */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#64748b',
                    fontSize: '0.85rem',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: '8px'
                }}>
                    <div>&copy; {new Date().getFullYear()} Anify. All rights reserved.</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>Developed by <a href="https://psatyakiran.in" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 500 }} onMouseOver={(e) => e.target.style.color = '#3b82f6'} onMouseOut={(e) => e.target.style.color = '#fff'}>Satya Kiran</a></span>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-links a {
                    color: #94a3b8;
                    transition: color 0.2s ease;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                .footer-links a:hover {
                    color: #fff;
                }
            `}</style>
        </footer>
    )
}

export default Footer
