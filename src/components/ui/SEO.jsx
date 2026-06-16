import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = "Anify - Stunning Standalone Android Widgets & Focus Blocker", 
    description = "Unlock your limits with stunning home screen widgets, minimalist wallpapers, and custom ringtones to personalize your Android experience.",
    keywords = "Anify, Android Widgets, Standalone Widgets, KWGT widgets, Android Personalization, Custom Clocks, CPU Monitor Widget, Focus Blocker, Minimal Wallpapers, Live Wallpapers, Anime Wallpapers, SKDev, Satya Kiran",
    name = "Anify",
    type = "website",
    image = "https://play-lh.googleusercontent.com/bPKAvR7DBW-HpogEDgSBBGsZ3rBpaX8ddP12EA54TIgmmenH7sFnT9xkNH5TjPvVXowfnLLOJnPzAbCb1u-T6Q=w480-h960-rw",
    canonical = "https://anify.psatyakiran.in/"
}) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content="Satya Kiran (SKDev)" />
            <link rel="canonical" href={canonical} />
            <meta name="theme-color" content="#007AFF" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={name} />
            
            {/* Twitter */}
            <meta name="twitter:creator" content="@AnifyApp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
