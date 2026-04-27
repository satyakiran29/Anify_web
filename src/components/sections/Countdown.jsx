import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    // Set a target date (e.g., 14 days from now)
    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 5,
        minutes: 30,
        seconds: 0
    });

    useEffect(() => {
        // Mock countdown logic for the next major update
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 14); // 14 days from now
        
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    const timeBlocks = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <section id="countdown" style={{ 
            padding: '80px 24px', 
            background: '#09090b',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                zIndex: 0
            }}></div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '20px',
                    color: '#38bdf8',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '24px'
                }}>
                    <span style={{ position: 'relative', top: '-1px' }}>⚡</span> Anify v2.0 Dropping Soon
                </div>
                
                <h2 style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(2rem, 5vw, 3rem)', 
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '48px',
                    letterSpacing: '-1px'
                }}>
                    Next Major Content Update
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'clamp(12px, 3vw, 24px)',
                    flexWrap: 'wrap'
                }}>
                    {timeBlocks.map((block, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{
                                width: 'clamp(70px, 15vw, 100px)',
                                height: 'clamp(70px, 15vw, 100px)',
                                background: '#1e293b',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                fontWeight: 800,
                                color: '#fff',
                                fontFamily: 'Inter, sans-serif',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                            }}>
                                {block.value.toString().padStart(2, '0')}
                            </div>
                            <span style={{
                                color: '#94a3b8',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {block.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Countdown;
