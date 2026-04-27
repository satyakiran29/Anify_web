import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = "Anify - Premium Widgets & Wallpapers", 
    description = "Unlock your limits with stunning home screen widgets, minimalist wallpapers, and custom ringtones to personalize your Android experience.",
    name = "Anify",
    type = "website",
    image = "https://aniset.psatyakiran.in/assets/aniset-a5b9f150.png"
}) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
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
