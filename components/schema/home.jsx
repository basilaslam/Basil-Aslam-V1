"use client";
import Script from "next/script";

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Basil Aslam | Full-Stack Developer',
  'description': 'Experienced full-stack developer specializing in React, Next.js, Node.js, and MongoDB. View my projects, skills, and experience in web development.',
  'url': 'https://basilaslam.com',
  'mainEntity': {
    '@type': 'Person',
    'name': 'Basil Aslam',
    'url': 'https://basilaslam.com',
    'image': 'https://basilaslam.com/Basil-Aslam.jpeg',
    'jobTitle': 'Full-Stack Developer',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Self-employed',
    },
    'sameAs': 'https://www.linkedin.com/in/basilaslam',
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Basil Aslam',
  },
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://basilaslam.com/#home',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'About',
        'item': 'https://basilaslam.com/#about',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Projects',
        'item': 'https://basilaslam.com/#projects',
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Skills',
        'item': 'https://basilaslam.com/#skills',
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Experience',
        'item': 'https://basilaslam.com/#experience',
      },
      {
        '@type': 'ListItem',
        'position': 6,
        'name': 'Contact',
        'item': 'https://basilaslam.com/#contact',
      },
    ],
  },
};

const HomeSchema = () => {
  return (
    <Script id="homeSchema" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  );
};

export default HomeSchema;
