import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';

const Changelog = () => {
  const updates = [
    {
      version: 'v1.1.2 (Latest Release)',
      date: 'June 2026',
      changes: [
        'Onboarding Tour: Introduced a new 5-slide onboarding tour to guide users through Anify\'s key personalization and utility features.',
        'Focus Lock Security: Improved security permissions, overlay prevention, and background service navigation in lockdown mode.',
        'Premium Experience: Removed all advertisements across the application for a cleaner, faster, and premium user experience.',
        'Support & Donate: Added a Support/Donate option to help fund the app\'s development and server costs.',
        'Refinements & Fixes: General UI polishing, performance optimizations, and minor bug fixes.'
      ]
    },
    {
      version: 'v1.3.0',
      date: 'June 2026',
      changes: [
        'Focus History Graph: Added a beautiful, custom daily bar chart displaying your total focus hours over the last 7 days.',
        'Scrollable Duration Presets: Expanded duration options to 15m, 25m, 45m, 1h, 2h, and 3h presets inside a sleek horizontal scrollable card.',
        'Blocker UI Synchronized: The circular countdown sweep animation and countdown timer inside the parent app are now fully synchronized in real-time with the background blocker service.',
        'Select All Apps: Added a "Select All" checkbox in the app selector dialog to easily manage target apps.',
        'Call & System UI Whitelisting: Whitelisted essential system packages (System UI, Dialer, In-Call UI, etc.) in Lockdown mode to prevent soft-locking incoming calls or status bar controls.',
        'Hold to Give Up: Press and hold the "Hold to Give Up" button for 3 seconds to cancel a focus session, featuring smooth charging and drainage animations.'
      ]
    },
    {
      version: 'v1.1.1',
      date: 'June 2026',
      changes: [
        'Routines & Habit Tracker: Built a comprehensive routines engine with custom templates, completion tracking, statistics, reminders, and Home screen integration.',
        'Interactive Anipet Widget: Introduced an interactive, pixel-art virtual pet widget that animated dynamically based on device battery status and media playback.',
        'BlockIt (App Blocker): Added an overlay blocking activity and background service to temporarily restrict distracting apps and enhance focus.',
        'Wallpaper Auto-Changer: Added a background auto-changer service utilizing Android WorkManager to schedule dynamic wallpaper rotation.',
        'Todo Widget: Added a minimalist daily checklist widget to manage tasks directly from the home screen.',
        'Optimized Network & Storage: Added paginated API models for faster response handling, alongside robust favorite and gallery management utilities.'
      ]
    },
    {
      version: 'v1.1.0',
      date: 'May 2026',
      changes: [
        'In-App Changelog: Stay up to date with the latest features and improvements directly from the app\'s overflow menu.',
        'Beta Feature Tags: Introduced clear "BETA" highlight tags for "Live Wallpaper" and "Life Calendar" to better communicate experimental features.',
        'Life Calendar: Experience the new "Life Calendar" live wallpaper - a beautiful dot grid representing your year\'s progress.',
        'Visual Refinements: Polished menu items and navigation elements for a more premium look and feel.'
      ]
    },
    {
      version: 'v1.0.8',
      date: 'May 2026',
      changes: [
        'Streamlined Navigation: Relocated the "About" section from the bottom navigation bar to the home screen overflow menu for a cleaner, more focused layout.',
        'Menu Structure: Improved overall home menu structure for easier access to important app information.',
        'Performance & Stability: General layout optimization and minor bug fixes to ensure a smoother, more stable user experience.'
      ]
    },
    {
      version: 'v1.0.7',
      date: 'April 2026',
      changes: [
        'Custom Widget Previews: Widgets now feature beautiful, high-quality image previews directly in the Android system widget picker.',
        'Enhanced Widget Identification: Added descriptive labels to all custom widgets (Japanese Clock, Einstein Quote, Anime Time, etc.) making them easier to find and select.',
        'In-App Widget Gallery: Updated the app\'s Widgets page to showcase accurate visual previews for all new custom additions.',
        'Performance & Stability: Expanded compatibility to support Android 11 (API level 30) devices. Fixed widget preview rendering and optimized internal resource management.'
      ]
    },
    {
      version: 'v1.0.6',
      date: 'April 2026',
      changes: [
        'Policy & Compliance: Refined all first-level external links to strictly adhere to Google Play Store\'s developer policies.',
        'Ad Format Standardization: Completed the migration from native to banner ads across all utility sections, ensuring 100% compliance with Families Ad Policy.',
        'Streamlined Settings: Removed redundant notification controls for a cleaner and more focused user interface.',
        'Corrected Ad Configurations: Resolved issues with Ad Unit IDs to ensure consistent ad delivery and prevent layout flickering.'
      ]
    },
    {
      version: 'v1.0.5',
      date: 'April 2026',
      changes: [
        'Families Policy Compliance: Standardized advertisement implementation to ensure full compliance with Google Play\'s Families Ad Policy.',
        'Dynamic Wallpaper Scrolling: Added smooth scrolling effects to the wallpaper preview for a more interactive feel.',
        'Unified Navigation: Renamed "Collections" to "Category" across the app for a more intuitive and consistent user experience.',
        'Immersive Dark Experience: Forced Global Dark Mode and fixed UI layout bleeding for a truly premium feel.',
        'Wallpaper Section Fixes: Resolved potential crashes when browsing large wallpaper categories.'
      ]
    },
    {
      version: 'v1.0.4',
      date: 'March 2026',
      changes: [
        'Immersive Wallpaper Experience: Redesigned Wallpaper Section with a modern 2-column grid and smooth horizontal category selection. Added a new Full-Screen Preview mode with minimalist floating controls.',
        'Notification Enhancements: Optimized permission handling for Android 13+ and added support to set favorite ringtones as Custom Notification Tones.',
        'Community & Sharing: Added "Rate Us" and "Share App" options to the home dashboard.',
        'Fixes & Stability: Smoother "Fall Down" intro animations on the Home screen, and general UI/performance optimizations.'
      ]
    }
  ];

  return (
    <section style={{
      padding: '160px 24px 100px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 1
    }}>
      <SEO title="Changelog | Anify" description="Stay up to date with the latest features, improvements, and news from Anify." />
      
      {/* Ambient backgrounds */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-30%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 900,
          marginBottom: '16px',
          letterSpacing: '-1.5px',
          color: '#fff'
        }}>
          Changelog & Release Notes
        </h1>
        <div style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-red))',
          borderRadius: '2px',
          boxShadow: '0 0 15px rgba(0, 122, 255, 0.4)',
          marginBottom: '32px'
        }}></div>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '56px',
          lineHeight: 1.6
        }}>
          Stay up to date with the latest features, improvements, and releases from the Anify widget app.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative', zIndex: 1 }}>
        {updates.map((update, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '20px',
              padding: '36px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="changelog-card"
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              paddingBottom: '16px'
            }}>
              <h2 style={{ 
                fontSize: '1.45rem', 
                fontWeight: 800, 
                color: index === 0 ? 'var(--accent-blue)' : '#fff',
                letterSpacing: '-0.5px'
              }}>
                {update.version}
              </h2>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
                {update.date}
              </span>
            </div>
            
            <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
              color: '#d1d5db',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              lineHeight: 1.6
            }}>
              {update.changes.map((change, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.98rem' }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent-blue)',
                    marginTop: '9px',
                    flexShrink: 0
                  }}></span>
                  <span style={{ color: '#cbd5e1' }}>{change}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <style>{`
        .changelog-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </section>
  );
};

export default Changelog;
