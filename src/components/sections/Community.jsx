import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
    const links = [
        {
            name: "Instagram",
            description: "Follow for the latest design concepts and updates.",
            url: "https://instagram.com/skdev29",
            color: "#e1306c",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )
        },
        {
            name: "Telegram",
            description: "Join our community group to request features and chat.",
            url: "https://t.me/anify_app",
            color: "#0088cc",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            )
        },
    ];

    return (
        <section id="community" style={{ padding: '120px 24px', position: 'relative' }}>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '80px' }}
            >
                <h2 style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '20px',
                    letterSpacing: '-1px'
                }}>
                    Join Our Community
                </h2>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Connect with thousands of other users. Share your unique home screen setups, get support, and stay updated.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {links.map((item, index) => (
                    <motion.a 
                        key={index} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="community-card" 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        textDecoration: 'none',
                        background: '#1a1b23',
                        borderRadius: '24px',
                        padding: '40px 32px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: `${item.color}20`,
                            color: item.color,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                            transition: 'all 0.3s ease'
                        }} className="community-icon-container">
                            {item.icon}
                        </div>
                        <h3 style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: '12px'
                        }}>
                            {item.name}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            {item.description}
                        </p>
                    </motion.a>
                ))}
            </div>

            <style>{`
                .community-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(255,255,255,0.2);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .community-card:hover .community-icon-container {
                    transform: scale(1.1);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
            `}</style>
        </section>
    );
};

export default Community;
