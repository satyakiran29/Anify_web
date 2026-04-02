import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{
            padding: '100px 24px 40px',
            borderTop: '1px solid var(--glass-border)',
            background: 'linear-gradient(to top, rgba(255,80,0,0.05) 0%, transparent 100%)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '64px',
                textAlign: 'left'
            }}>
                <div>
                    <h3 style={{ marginBottom: '24px', fontSize: '1.8rem', letterSpacing: '-1.5px' }}>ANIFY<span style={{ color: 'var(--accent-color)' }}>.</span></h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '300px' }}>
                        A passion project dedicated to minimalist design and beautifully crafted aesthetics on Android.
                    </p>
                </div>
                {/* <div id="community">
                    <h4 style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>COMMUNITY</h4>
                    <ul className="footer-links" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li><a href="https://t.me/AnifyWeb" target="_blank" rel="noopener noreferrer">Telegram Community</a></li>
                        <li><a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">Discord Server</a></li>
                        <li><a href="https://instagram.com/AnifyWeb" target="_blank" rel="noopener noreferrer">Instagram Updates</a></li>
                    </ul>
                </div> */}
                <div>
                    <h4 style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>LEGAL</h4>
                    <ul className="footer-links" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Support Center</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>DEVELOPER</h4>
                    <ul className="footer-links" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li><a href="https://psatyakiran.in" target="_blank" rel="noopener noreferrer">Developer Portfolio</a></li>
                        <li><a href="https://skdev.vercel.app" target="_blank" rel="noopener noreferrer">SK Dev Studio</a></li>
                    </ul>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '80px auto 0',
                paddingTop: '40px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem'
            }}>
                <div>&copy; {new Date().getFullYear()} Anify Widgets. All rights reserved.</div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <span>Designed by Satya Kiran (SkDev)</span>
                    <span>For Android Widgets</span>
                </div>
            </div>

            <style>{`
                .footer-links a {
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .footer-links a:hover {
                    color: var(--accent-color);
                    transform: translateX(5px);
                }
            `}</style>
        </footer>
    )
}

export default Footer
