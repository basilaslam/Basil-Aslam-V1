"use client";
import Script from "next/script";

const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Basil Aslam | Full-Stack Developer Portfolio',
    'description': 'Experienced full-stack developer specializing in React, Next.js, Node.js, and MongoDB. View my projects, skills, and experience in web development.',
    'url': 'https://www.basilaslam.com',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Basil Aslam',
      'url': 'https://www.basilaslam.com',
      'image': 'https://www.basilaslam.com/Basil-Aslam.jpeg',
      'jobTitle': 'Full-Stack Developer',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Self-employed'
      },
      'sameAs': 'https://www.linkedin.com/in/basilaslam',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Basil Aslam'
    }
  };


const HomeSchema = () => {
    return(
        <Script type="application/ld+json">{JSON.stringify(schemaData)}</Script>
    )
}

export default HomeSchema