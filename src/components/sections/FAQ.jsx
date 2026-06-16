import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "What is Anify?",
            answer: "Anify is a premium personalization and productivity suite for Android that provides beautifully crafted widgets, curated minimalist wallpapers, custom ringtones, and built-in focus locking tools to elevate your mobile experience."
        },
        {
            question: "How do I apply the widgets?",
            answer: "Anify has its own built-in widget engine. Simply long-press your home screen, open the Widgets menu, find Anify, and drag your favorite widget onto your screen. No third-party apps like KWGT are needed."
        },
        {
            question: "What is the BlockIt Focus Lock feature?",
            answer: "BlockIt is an advanced productivity tool built directly into Anify. It allows you to select and temporarily lock distracting applications, helping you stay focused. It features a 7-day focus history chart, scrollable focus presets, low-resource synchronization, and anti-impulse cancel gestures."
        },
        {
            question: "How does the Wallpaper Auto Changer work?",
            answer: "The Auto Changer lets you set separate day and night wallpaper pools using either Anify's library or your local device gallery. It runs efficiently in the background, updating your home screen automatically based on your schedule while maintaining battery efficiency."
        },
        {
            question: "Are the wallpapers and ringtones free?",
            answer: "Yes! Anify comes with a huge library of high-quality wallpapers (including live wallpaper dot-grids) and custom sounds that are free to use, supported by standard compliance-friendly advertisements."
        },
        {
            question: "How often is the app updated?",
            answer: "We actively update Anify with new widgets, fresh wallpapers, ringtones, and robust features regularly, keeping your setup modern and your productivity tools optimized."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                        marginBottom: '20px',
                        letterSpacing: '-1.5px'
                    }}>
                        Frequently Asked Questions
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
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Everything you need to know about Anify.</p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ 
                                background: 'var(--bg-card)',
                                border: '1px solid rgba(255,255,255,0.04)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                            className="faq-accordion-card"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '24px 32px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    gap: '20px'
                                }}
                            >
                                <span style={{ letterSpacing: '-0.3px' }}>{faq.question}</span>
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        color: 'var(--accent-blue)',
                                        flexShrink: 0
                                    }}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                opacity: openIndex === index ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                padding: openIndex === index ? '0 32px 28px' : '0 32px',
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                lineHeight: 1.6
                            }}>
                                {faq.answer}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .faq-accordion-card:hover {
                    border-color: rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
                }
            `}</style>
        </section>
    )
}

export default FAQ;
