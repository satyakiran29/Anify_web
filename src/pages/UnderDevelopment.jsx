import React from 'react';
import { Link } from 'react-router-dom';

const UnderDevelopment = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'var(--bg-color)',
      color: 'var(--text-primary)',
      textAlign: 'center',
      padding: '24px'
    }}>
      <div style={{
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src="https://play-lh.googleusercontent.com/bPKAvR7DBW-HpogEDgSBBGsZ3rBpaX8ddP12EA54TIgmmenH7sFnT9xkNH5TjPvVXowfnLLOJnPzAbCb1u-T6Q=w480-h960-rw"
          alt="Anify Logo"
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '20px',
            objectFit: 'cover',
            boxShadow: '0 8px 24px rgba(0, 122, 255, 0.4)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        />
      </div>
      <h1 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        marginBottom: '16px',
        letterSpacing: '-1px'
      }}>
        Maintenance Mode
      </h1>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        maxWidth: '500px',
        lineHeight: 1.6,
        marginBottom: '32px'
      }}>
        We are currently undergoing maintenance to bring you a better experience. You can still download the app or read our privacy policy below.
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.skdev.anify"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg, var(--accent-blue), #005bc4)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 8px 24px rgba(0, 122, 255, 0.4)',
            textDecoration: 'none',
            border: 'none',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 122, 255, 0.55)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 122, 255, 0.4)';
            e.currentTarget.style.filter = 'none';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download App
        </a>

        <Link
          to="/privacy-policy"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 700,
            fontSize: '1rem',
            backdropFilter: 'blur(10px)',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Privacy Policy
        </Link>
      </div>

      <div style={{
        marginTop: '64px',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        Developed by <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 600 }}>Satya Kiran (SKDev)</a>
      </div>
    </div>
  );
};

export default UnderDevelopment;
