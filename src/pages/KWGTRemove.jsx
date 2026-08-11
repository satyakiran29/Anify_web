import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const KWGTRemove = () => {
    const [copied, setCopied] = useState(false);

    const emailAddress = 'satyakiran296@gmail.com';
    const telegramId = '@skdev29';
    const telegramUrl = 'https://t.me/skdev29';

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div style={{
            maxWidth: '1000px',
            margin: '140px auto 100px',
            padding: '0 24px',
            color: 'var(--text-primary)',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
            <SEO 
                title="KWGT Widget Removal Request | Anify" 
                description="Request the removal of KWGT widgets or content from the Anify app. Contact developer via satyakiran296@gmail.com or Telegram @skdev29."
            />

            {/* Header Banner */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '30px',
                    background: 'rgba(0, 122, 255, 0.1)',
                    border: '1px solid rgba(0, 122, 255, 0.25)',
                    color: 'var(--accent-blue)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Content Policy & Removal
                </div>
                
                <h1 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                    fontWeight: 900,
                    letterSpacing: '-1.5px',
                    marginBottom: '16px',
                    background: 'linear-gradient(135deg, #ffffff 60%, #cbd5e1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    KWGT Widget Removal Request
                </h1>
                
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    maxWidth: '680px',
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    We strictly respect intellectual property, copyright, and creator preferences. If you are a creator or copyright holder and wish to have a KWGT widget or asset removed from the Anify app, please reach out directly via Mail or Telegram.
                </p>
            </motion.div>

            {/* Direct Contact Cards Grid */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    marginBottom: '50px'
                }}
            >
                {/* Email Card */}
                <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: 'rgba(0, 122, 255, 0.12)',
                            color: '#007AFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Mail Address
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: '6px 0 12px' }}>
                            {emailAddress}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '24px' }}>
                            Send us your removal request directly via email. We review all incoming mail within 24-48 hours.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <a 
                            href={`mailto:${emailAddress}?subject=KWGT%20Widget%20Removal%20Request`}
                            style={{
                                flex: 1,
                                minWidth: '120px',
                                background: 'linear-gradient(135deg, #007AFF, #005bc4)',
                                color: '#fff',
                                textDecoration: 'none',
                                textAlign: 'center',
                                padding: '12px 18px',
                                borderRadius: '14px',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: '0 4px 15px rgba(0, 122, 255, 0.3)'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Send Email
                        </a>

                        <button 
                            onClick={handleCopyEmail}
                            style={{
                                background: copied ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                                border: copied ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                                color: copied ? '#4ade80' : '#fff',
                                padding: '12px 16px',
                                borderRadius: '14px',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            {copied ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    Copy
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Telegram Card */}
                <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: 'rgba(0, 136, 204, 0.15)',
                            color: '#0088cc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Telegram ID
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: '6px 0 12px' }}>
                            {telegramId}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '24px' }}>
                            For fastest responses or instant inquiries, message us directly on Telegram.
                        </p>
                    </div>

                    <a 
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'linear-gradient(135deg, #0088cc, #006699)',
                            color: '#fff',
                            textDecoration: 'none',
                            textAlign: 'center',
                            padding: '12px 18px',
                            borderRadius: '14px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 15px rgba(0, 136, 204, 0.3)'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21.5 2L2 9.5l7.5 3L17 6.5l-5.5 8L17 21.5L21.5 2z"></path>
                        </svg>
                        Open Telegram Chat
                    </a>
                </div>
            </motion.div>

            {/* Removal Process Steps */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                    background: 'var(--bg-card)',
                    borderRadius: '24px',
                    padding: '36px 32px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '50px'
                }}
            >
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{
                        width: '10px',
                        height: '24px',
                        background: 'var(--accent-blue)',
                        borderRadius: '4px',
                        display: 'inline-block'
                    }}></span>
                    Removal Policy & Guidelines
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '24px'
                }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>01. Widget Information</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                            Specify the exact KWGT widget name, pack name, or widget ID as shown in the Anify application.
                        </p>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>02. Reason for Request</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                            State your reason (e.g. copyright ownership, original designer request, update, or privacy concerns).
                        </p>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>03. Ownership Proof</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                            Include link to your original creation, social media profile, or portfolio to verify identity.
                        </p>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>04. Swift Action</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                            Once verified, the widget will be unlisted or removed from the Anify repository within 24-48 hours.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Footer Back Link */}
            <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Link to="/" style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                    &larr; Back to Anify Home
                </Link>
            </div>
        </div>
    );
};

export default KWGTRemove;
