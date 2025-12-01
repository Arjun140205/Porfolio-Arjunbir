// Structured Data (JSON-LD) for SEO

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arjunbir Singh",
  "url": "https://arjunbirsingh.vercel.app",
  "image": "https://arjunbirsingh.vercel.app/arjunbir-profile.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/arjunbir-singh/",
    "https://github.com/Arjun140205",
    "https://www.instagram.com/arjunbir_singhh/"
  ],
  "jobTitle": "Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Educational Institution"
  },
  "knowsAbout": [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Full Stack Development",
    "MERN Stack",
    "Cloud Computing",
    "AWS",
    "Database Management",
    "Web Development"
  ],
  "description": "Aspiring Software Developer specializing in MERN stack, cloud computing, and data analytics",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "India"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Arjunbir Singh Portfolio",
  "url": "https://arjunbirsingh.vercel.app",
  "description": "Portfolio website showcasing projects, skills, and certifications of Arjunbir Singh, a Full Stack Developer",
  "author": {
    "@type": "Person",
    "name": "Arjunbir Singh"
  },
  "inLanguage": "en-US"
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2024-01-01T00:00:00+00:00",
  "dateModified": new Date().toISOString(),
  "mainEntity": personSchema
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Arjunbir Singh Portfolio",
  "author": personSchema,
  "description": "A collection of web development projects showcasing expertise in MERN stack, cloud computing, and modern web technologies",
  "url": "https://arjunbirsingh.vercel.app",
  "keywords": "portfolio, web development, MERN stack, React, Node.js, MongoDB, Full Stack Developer"
};

export const softwareApplicationSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": project.title,
  "description": project.description,
  "url": project.link,
  "applicationCategory": "WebApplication",
  "author": personSchema,
  "programmingLanguage": project.technologies,
  "screenshot": project.thumbnail
});

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Arjunbir Singh",
  "url": "https://arjunbirsingh.vercel.app",
  "logo": "https://i.ibb.co/j9b0TFGV/android-chrome-192x192.png",
  "sameAs": [
    "https://www.linkedin.com/in/arjunbir-singh/",
    "https://github.com/Arjun140205",
    "https://www.instagram.com/arjunbir_singhh/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9103203635",
    "contactType": "Professional",
    "email": "arjunbirsingh1699@gmail.com",
    "availableLanguage": ["English", "Hindi"]
  }
};
