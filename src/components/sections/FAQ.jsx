import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "What is Anify?",
            answer: "Anify is a premium personalization app for Android that provides beautifully crafted widgets, curated minimalist wallpapers, and custom ringtones to elevate your home screen."
        },
        {
            question: "How do I apply the widgets?",
            answer: "Anify has its own built-in widget engine. Simply long-press your home screen, open the Widgets menu, find Anify, and drag your favorite widget onto your screen."
        },
        {
            question: "Are the wallpapers free?",
            answer: "Yes, Anify comes with a huge selection of free, high-quality wallpapers. We also offer exclusive premium packs in our store."
        },
        {
            question: "How often is the app updated?",
            answer: "We regularly update Anify with new widgets, wallpapers, and ringtones every month to keep your setup fresh and modern."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" style={{ padding: '100px 24px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                        fontWeight: 800,
                        color: '#fff',
                        marginBottom: '16px',
                        letterSpacing: '-1px'
                    }}>
                        Frequently Asked Questions
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Everything you need to know about Anify.</p>
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
                                background: '#1a1b23',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '24px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    fontFamily: 'Inter, sans-serif',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                {faq.question}
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        color: '#3b82f6'
                                    }}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                opacity: openIndex === index ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                padding: openIndex === index ? '0 24px 24px' : '0 24px',
                                color: '#94a3b8',
                                lineHeight: 1.6
                            }}>
                                {faq.answer}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ;
