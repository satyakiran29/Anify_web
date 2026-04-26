import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '140px auto 100px', padding: '0 24px', color: 'var(--text-primary)', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--accent-color)', letterSpacing: '-1px' }}>Privacy Policy for Anify</h1>
      <p style={{ color: 'var(--text-secondary)' }}><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

      <div style={{ marginTop: '40px' }} className="policy-content">
        <p style={{ marginBottom: '20px' }}>
          Thank you for choosing <strong>Anify</strong>, the ultimate personalization app for Android. We respect your privacy and are committed to protecting it through our compliance with this privacy policy.
        </p>

        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '16px' }}>When you use Anify, we may collect the following types of information to provide and improve our services (such as delivering HD wallpapers, widgets, and ringtones) and to show you relevant advertisements:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '8px' }}><strong>Usage Data:</strong> We may collect anonymous data on how you interact with the app, including which features you use.</li>
          <li style={{ marginBottom: '8px' }}><strong>Device Information:</strong> We may collect device-specific information such as device model, OS version, and Advertising identifiers.</li>
        </ul>

        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>2. How We Use Your Information</h2>
        <p style={{ marginBottom: '16px' }}>Anify is completely free and supported by ads to keep bringing new content regularly. The information collected is used in the following ways:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '8px' }}>To maintain and improve the performance of our app.</li>
          <li style={{ marginBottom: '8px' }}>To serve personalized or non-personalized advertisements via third-party ad networks.</li>
          <li style={{ marginBottom: '8px' }}>To analyze crash reports and ensure a smooth, fast, and bug-free experience.</li>
        </ul>

        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>3. Third-Party Services</h2>
        <p style={{ marginBottom: '20px' }}>We may employ third-party companies and services to facilitate our App and provide ad-supported content. These third parties may have access to your Device Information to perform analysis and serve ads on our behalf. These third parties have their own privacy policies.</p>

        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>4. Permissions Used by Anify</h2>
        <p style={{ marginBottom: '20px' }}>Anify requires certain device permissions to function correctly (such as saving wallpapers or modifying system settings for ringtones). We only use these permissions to provide the requested features and do not use them to collect personal data without your explicit action.</p>

        {/* NEW SECTION ADDED HERE */}
        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>5. Data Retention and Deletion</h2>
        <p style={{ marginBottom: '16px' }}>We are committed to giving you control over your data. Here is how we handle data retention and deletion:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '8px' }}><strong>Data Retention:</strong> We retain anonymous usage data and device identifiers only for as long as necessary to provide our services, maintain app performance, and serve relevant ads. This is generally for the duration you have the app installed on your device.</li>
          <li style={{ marginBottom: '8px' }}><strong>Data Deletion:</strong> Because Anify does not require a user account, the data collected is tied to your device and its advertising ID. You can effectively delete this data at any time by:
            <ul style={{ marginLeft: '24px', marginTop: '8px', listStyleType: 'circle' }}>
              <li style={{ marginBottom: '4px' }}>Uninstalling the Anify app.</li>
              <li style={{ marginBottom: '4px' }}>Clearing the app's data and cache in your Android device settings.</li>
            </ul>
          </li>
          <li style={{ marginBottom: '8px' }}>If you have specific requests regarding your data, you can contact us directly via the email provided below.</li>
        </ul>

        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>6. Changes to This Privacy Policy</h2>
        <p style={{ marginBottom: '20px' }}>We may update our Privacy Policy from time to time as we add fresh content and regular updates. We will notify you of any changes by updating the effective date on this page.</p>

        <h2 style={{ fontSize: '1.6rem', marginTop: '40px', marginBottom: '20px', fontWeight: '600' }}>7. Contact Us</h2>
        <p style={{ marginBottom: '20px' }}>If you have any questions or suggestions about our Privacy Policy, please contact us at <a href="mailto:satyakiran296@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>satyakiran296@gmail.com</a>.</p>
      </div>

      <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--glass-border)' }}>
        <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s', fontWeight: '500' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;