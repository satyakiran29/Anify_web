import React from 'react';

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
        background: 'rgba(139, 92, 246, 0.1)',
        padding: '24px',
        borderRadius: '50%',
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <h1 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        marginBottom: '16px',
        letterSpacing: '-1px'
      }}>
        Under Development
      </h1>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        maxWidth: '500px',
        lineHeight: 1.6
      }}>
        We are currently working hard to bring you the best experience. Anify will be available soon. Stay tuned!
      </p>
    </div>
  );
};

export default UnderDevelopment;
