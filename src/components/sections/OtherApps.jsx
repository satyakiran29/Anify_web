import React from 'react'
import { motion } from 'framer-motion'

const OtherApps = () => {
    const apps = [
        {
            name: "Anify",
            tagline: "Widgets, Wallpapers & Blocker",
            description: "A standalone personalization suite with 20+ custom widgets, live CPU/network speed graphs, wallpapers, ringtones, and a built-in focus blocker.",
            badge: "Standalone App",
            badgeColor: "linear-gradient(135deg, var(--accent-blue), #00c6ff)",
            url: "https://play.google.com/store/apps/details?id=com.skdev.anify",
            icon: "https://play-lh.googleusercontent.com/bPKAvR7DBW-HpogEDgSBBGsZ3rBpaX8ddP12EA54TIgmmenH7sFnT9xkNH5TjPvVXowfnLLOJnPzAbCb1u-T6Q=w480-h960-rw"
        },
        {
            name: "Aniset",
            tagline: "Anime KWGT Widgets Pack",
            description: "Transform your Android home screen with a curated bundle of stunning anime-themed widgets, premium WebP wallpapers, and ringtones powered by KWGT.",
            badge: "KWGT Pack",
            badgeColor: "linear-gradient(135deg, var(--accent-red), #ff7b00)",
            url: "https://play.google.com/store/apps/details?id=com.skdev.aniset",
            icon: "https://play-lh.googleusercontent.com/7123L59NlX-pWixm-4cK4u3c7XyLq8Gz-Zk4v4pT-V4V4sL5V4y-V4w_w240-h480-rw" /* Default or generic app icon URL */
        }
    ]

    // Fallback icon for Aniset if the URL is broken/placeholder - let's use a beautiful SVG layout or standard styling
    const getAppIcon = (app) => {
        if (app.name === "Anify") {
            return (
                <img 
                    src={app.icon} 
                    alt={app.name} 
                    style={{ width: '64px', height: '64px', borderRadius: '14px', objectFit: 'cover' }} 
                />
            )
        } else {
            // Aniset custom widget-like icon
            return (
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #FF3B30, #ff7b00)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: '#fff',
                    boxShadow: '0 8px 16px rgba(255, 59, 48, 0.3)'
                }}>
                    A
                </div>
            )
        }
    }

    return (
        <section id="other-apps" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'rgba(255, 59, 48, 0.04)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 3.2rem)', 
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '16px',
                    letterSpacing: '-1.5px'
                }}>
                    Developer Portfolio
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    Explore custom-designed Android personalization and widget applications published by SKDev.
                </p>
            </motion.div>

            {/* Grid of Apps */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '30px',
                maxWidth: '1000px',
                margin: '0 auto 60px auto'
            }}>
                {apps.map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        style={{
                            flex: '1 1 420px',
                            maxWidth: '480px',
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: '24px',
                            padding: '36px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: '24px',
                            position: 'relative',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        className="app-portfolio-card"
                    >
                        {/* Top Metadata */}
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '24px'
                            }}>
                                {getAppIcon(app)}
                                <span style={{
                                    background: app.badgeColor,
                                    color: '#fff',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    padding: '5px 12px',
                                    borderRadius: '12px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {app.badge}
                                </span>
                            </div>

                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                color: '#fff',
                                marginBottom: '4px',
                                letterSpacing: '-0.5px'
                            }}>
                                {app.name}
                            </h3>
                            <div style={{
                                fontSize: '0.92rem',
                                color: 'var(--accent-blue)',
                                fontWeight: 600,
                                marginBottom: '16px'
                            }}>
                                {app.tagline}
                            </div>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.98rem',
                                lineHeight: 1.6
                            }}>
                                {app.description}
                            </p>
                        </div>

                        {/* Store Action Button */}
                        <a
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '20px',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                            className="btn-store-redirect"
                        >
                            Get on Google Play
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Developer Profile Wide Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}
            >
                <a
                    href="https://play.google.com/store/apps/dev?id=9166037782169864125"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(255, 59, 48, 0.05))',
                        border: '1px solid rgba(0, 122, 255, 0.15)',
                        borderRadius: '24px',
                        padding: '32px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '16px',
                        textDecoration: 'none',
                        transition: 'all 0.4s ease'
                    }}
                    className="dev-profile-cta"
                >
                    <h4 style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#fff',
                        letterSpacing: '-0.5px'
                    }}>
                        Looking for all SKDev customization applications?
                    </h4>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.98rem',
                        maxWidth: '560px',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        Visit our official developer console store listing to browse themes, templates, widget collections, and setup guides.
                    </p>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                        color: '#fff',
                        padding: '12px 28px',
                        borderRadius: '24px',
                        fontWeight: 750,
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 8px 20px rgba(0, 122, 255, 0.25)',
                        marginTop: '8px',
                        transition: 'all 0.3s ease'
                    }} className="dev-profile-cta-btn">
                        View Play Store Developer Page
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </a>
            </motion.div>

            <style>{`
                .app-portfolio-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 122, 255, 0.02);
                }
                .app-portfolio-card:hover .btn-store-redirect {
                    background: rgba(0, 122, 255, 0.08) !important;
                    border-color: rgba(0, 122, 255, 0.2) !important;
                    color: var(--accent-blue) !important;
                }
                .dev-profile-cta:hover {
                    border-color: rgba(0, 122, 255, 0.3) !important;
                    background: linear-gradient(135deg, rgba(0, 122, 255, 0.08), rgba(255, 59, 48, 0.08)) !important;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
                }
                .dev-profile-cta:hover .dev-profile-cta-btn {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(0, 122, 255, 0.45) !important;
                }
            `}</style>
        </section>
    )
}

export default OtherApps
