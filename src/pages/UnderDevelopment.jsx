import React from 'react';
import { Link } from 'react-router-dom';

const UnderDevelopment = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-logo-wrapper">
        <img
          src="https://play-lh.googleusercontent.com/bPKAvR7DBW-HpogEDgSBBGsZ3rBpaX8ddP12EA54TIgmmenH7sFnT9xkNH5TjPvVXowfnLLOJnPzAbCb1u-T6Q=w480-h960-rw"
          alt="Anify Logo"
          className="maintenance-logo"
        />
      </div>
      <h1 className="maintenance-title">
        Maintenance Mode
      </h1>
      <p className="maintenance-text">
        We are currently undergoing maintenance to bring you a better experience. You can still download the app or read our privacy policy below.
      </p>

      <div className="maintenance-actions">
        <a
          href="https://play.google.com/store/apps/details?id=com.skdev.anify"
          target="_blank"
          rel="noopener noreferrer"
          className="maintenance-btn btn-primary"
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
          className="maintenance-btn btn-secondary"
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

      <div className="desktop-qr">
        <p className="qr-text">Scan to install on your phone</p>
        <div className="qr-box">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&color=000000&bgcolor=ffffff&data=https://play.google.com/store/apps/details?id=com.skdev.anify" 
            alt="Download Anify QR Code" 
            className="qr-img"
          />
        </div>
      </div>

      <div className="maintenance-footer">
        Developed by <a href="https://skdev.psatyakiran.in/" target="_blank" rel="noopener noreferrer">Satya Kiran (SKDev)</a>
      </div>

      <style>{`
        .maintenance-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: var(--bg-color);
          color: var(--text-primary);
          text-align: center;
          padding: 32px 24px;
        }
        .maintenance-logo-wrapper {
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .maintenance-logo {
          width: 96px;
          height: 96px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 8px 24px rgba(0, 122, 255, 0.4);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .maintenance-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }
        .maintenance-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 500px;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .maintenance-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 500px;
        }
        .maintenance-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 28px;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent-blue), #005bc4);
          color: #fff;
          box-shadow: 0 8px 24px rgba(0, 122, 255, 0.4);
          border: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0, 122, 255, 0.55);
          filter: brightness(1.1);
        }
        .btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .maintenance-footer {
          margin-top: 64px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .maintenance-footer a {
          color: var(--accent-blue);
          text-decoration: none;
          font-weight: 600;
        }
        .desktop-qr {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          opacity: 0;
        }
        .qr-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .qr-box {
          background: #ffffff;
          padding: 12px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 122, 255, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .qr-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 122, 255, 0.25);
        }
        .qr-img {
          width: 120px;
          height: 120px;
          border-radius: 8px;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
          .maintenance-container {
            padding: 24px 16px;
          }
          .maintenance-logo {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            margin-bottom: 24px;
          }
          .maintenance-title {
            font-size: 2rem;
            margin-bottom: 12px;
          }
          .maintenance-text {
            font-size: 1rem;
            margin-bottom: 24px;
            padding: 0 10px;
          }
          .maintenance-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }
          .maintenance-btn {
            width: 100%;
            padding: 14px 20px;
          }
          .maintenance-footer {
            margin-top: 48px;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-qr {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default UnderDevelopment;
