import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Arjunbir Singh - Full Stack Developer | MERN Stack Expert',
  description = 'Arjunbir Singh is an aspiring software developer specializing in MERN stack, cloud computing, and data analytics. Explore my portfolio of web applications, projects, and certifications.',
  keywords = 'Arjunbir Singh, Full Stack Developer, MERN Stack, React Developer, Node.js, MongoDB, Express.js, Web Developer, Software Engineer, Cloud Computing, AWS, Portfolio, India',
  author = 'Arjunbir Singh',
  image = 'https://i.ibb.co/j9b0TFGV/android-chrome-192x192.png',
  url = 'https://arjunbirsingh.vercel.app',
  type = 'website',
  twitterHandle = '@arjunbir_singhh',
  structuredData = null,
}) => {
  const siteTitle = title.includes('Arjunbir Singh') ? title : `${title} | Arjunbir Singh`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Arjunbir Singh Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content={twitterHandle} />
      <meta property="twitter:site" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
