import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';

const Changelog = () => {
  const updates = [
    {
      version: 'v1.0.0 (Coming Soon)',
      date: 'Q2 2026',
      changes: [
        'Initial release of Anify App.',
        'Over 10+ customizable widgets.',
        'Exclusive minimalist and anime wallpapers.',
        'High-quality ringtone collection.'
      ]
    },
    {
      version: 'Beta 0.9',
      date: 'March 2026',
      changes: [
        'Added dynamic theming engine.',
        'Performance improvements and bug fixes.',
        'UI redesign for the widget gallery.'
      ]
    }
  ];

  return (
    <section style={{
      padding: '120px 24px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      <SEO title="Changelog | Anify" description="Stay up to date with the latest features, improvements, and news from Anify." />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <h1 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        marginBottom: '16px',
        letterSpacing: '-1px'
      }}>
        Changelog & News
      </h1>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        marginBottom: '48px'
      }}>
        Stay up to date with the latest features, improvements, and news from Anify.
      </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {updates.map((update, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: 'var(--glass-shadow)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '16px'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-light)' }}>
                {update.version}
              </h2>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {update.date}
              </span>
            </div>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              color: '#d1d5db',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              lineHeight: 1.6
            }}>
              {update.changes.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Changelog;
