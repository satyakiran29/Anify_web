import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/ui/SEO'

const NotFound = () => {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            padding: '120px 24px',
            textAlign: 'center'
        }}>
            <SEO title="404 Not Found | Anify" description="The page you are looking for does not exist." />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <h1 style={{
                    fontFamily: 'Inter, serif',
                    fontSize: 'clamp(6rem, 15vw, 10rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: '#3b82f6',
                    marginBottom: '16px',
                    textShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
                }}>
                    404
                </h1>
                <h2 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '24px'
                }}>
                    Page Not Found
                </h2>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.1rem',
                    maxWidth: '400px',
                    margin: '0 auto 40px',
                    lineHeight: 1.6
                }}>
                    Oops! It looks like you're lost in space. The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/" style={{
                    background: '#3b82f6',
                    color: '#fff',
                    padding: '14px 32px',
                    borderRadius: '30px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
                    transition: 'transform 0.2s ease, background 0.2s ease'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.background = '#2563eb'
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.background = '#3b82f6'
                }}>
                    Return Home
                </Link>
            </motion.div>
        </section>
    )
}

export default NotFound
