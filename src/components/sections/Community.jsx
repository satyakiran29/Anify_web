import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
    const links = [
        {
            name: "Instagram",
            description: "Follow for the latest customization concepts, setup blueprints, and updates.",
            url: "https://instagram.com/skdev29",
            color: "#e1306c",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )
        },
        {
            name: "Telegram",
            description: "Join our community group to chat, request features, and get support.",
            url: "https://t.me/skdev29",
            color: "#0088cc",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                    fontSize: 'clamp(2.5rem, 6vw, 3.2rem)', 
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '20px',
                    letterSpacing: '-1.5px'
                }}>
                    Join Our Community
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-red))',
                    margin: '0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px rgba(0, 122, 255, 0.4)',
                    marginBottom: '20px'
                }}></div>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    Connect with thousands of other users. Share your unique home screen setups, get support, and stay updated.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px',
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            textDecoration: 'none',
                            background: 'var(--bg-card)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            border: '1px solid rgba(255,255,255,0.04)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: `${item.color}15`,
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
                            fontSize: '1.45rem',
                            fontWeight: 800,
                            color: '#fff',
                            marginBottom: '12px',
                            letterSpacing: '-0.5px'
                        }}>
                            {item.name}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                            {item.description}
                        </p>
                    </motion.a>
                ))}
            </div>

            <style>{`
                .community-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.08) !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.35);
                }
                .community-card:hover .community-icon-container {
                    transform: scale(1.08);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }
            `}</style>
        </section>
    );
};

export default Community;
