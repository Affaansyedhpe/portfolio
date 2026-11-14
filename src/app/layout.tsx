import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Affan Syed | Technical Marketing Manager & Product Marketer | B2B AI',
    template: '%s | Affan Syed'
  },
  description: 'Affan Syed is a Product Marketer and Technical Marketing Manager with 6 years of B2B experience and a Computer Science engineering background, leading go-to-market, field enablement, and technical content for AI products. 7× American Advertising Award winner.',
  keywords: ['Affan Syed', 'Affan Syed Mahmood Hussain', 'Technical Marketing Manager', 'Product Marketer', 'Product Marketing Manager', 'Technical Product Marketing', 'B2B AI Marketing', 'Go-to-Market Strategy', 'GTM Strategy', 'Field Enablement', 'Sales Enablement', 'Technical Content', 'Product Demos', 'Positioning and Messaging', 'Competitive Intelligence', 'Account-Based Marketing', 'ABM', 'ICP Definition', 'Demand Generation', 'Agentic AI', 'LangChain', 'Private Cloud AI', 'B2B Marketing', 'Enterprise Marketing', 'American Advertising Awards', 'ADDY Award Winner', 'Fort Worth ADDYs'],
  authors: [{ name: 'Affan Syed', url: 'https://affansyed.com' }],
  creator: 'Affan Syed',
  publisher: 'Affan Syed',
  metadataBase: new URL('https://affansyed.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://affansyed.com',
    title: 'Affan Syed | Technical Marketing Manager & Product Marketer | B2B AI',
    description: 'Product Marketer and Technical Marketing Manager with 6 years of B2B experience. Taking AI products to market through positioning, enablement, and technical content.',
    siteName: 'Affan Syed Portfolio',
    images: [
      {
        url: '/images/profile2.jpg',
        width: 1200,
        height: 630,
        alt: 'Affan Syed - Technical Marketing Manager and Product Marketer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affan Syed | Technical Marketing Manager & Product Marketer | B2B AI',
    description: 'Product Marketer and Technical Marketing Manager with 6 years of B2B experience. Taking AI products to market through positioning, enablement, and technical content.',
    images: ['/images/profile2.jpg'],
    creator: '@Affansyed321',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console code
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://affansyed.com/#person",
      "name": "Affan Syed",
      "alternateName": ["Affan Syed Mahmood Hussain", "Affan Mahmood", "Affan S."],
      "url": "https://affansyed.com",
      "mainEntityOfPage": "https://affansyed.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://affansyed.com/images/profile2.jpg",
        "width": 400,
        "height": 400,
        "caption": "Affan Syed - Technical Marketing Manager and Product Marketer"
      },
      "sameAs": [
        "https://x.com/Affansyed321",
        "https://www.youtube.com/@AffanSyedx",
        "https://www.linkedin.com/in/affan-syed-mahmood-hussain-0577a6169/",
        "https://github.com/affansyed321"
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "affansyed.com",
        "value": "Technical Marketing Manager Affan Syed"
      },
      "jobTitle": ["Technical Marketing Manager", "Product Marketer", "Product Marketing Manager"],
      "description": "Affan Syed is a Product Marketer and Technical Marketing Manager with 6 years of B2B experience and a Computer Science engineering background, leading go-to-market, field enablement, and technical content for AI products. 7× American Advertising Award winner.",
      "disambiguatingDescription": "Technical Marketing Manager and Product Marketer in Texas focused on taking B2B AI products to market.",
      "knowsAbout": [
        "Product Marketing",
        "Technical Marketing",
        "Go-to-Market Strategy",
        "Field Enablement",
        "Sales Enablement",
        "Technical Content",
        "Product Demos",
        "Positioning and Messaging",
        "Competitive Intelligence",
        "Account-Based Marketing",
        "ICP Definition",
        "Demand Generation",
        "AI Products",
        "Agentic AI Systems",
        "LangChain",
        "Python",
        "Power BI",
        "Tableau",
        "Supabase",
        "Podcast Hosting"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "7× American Advertising Awards Winner",
          "credentialCategory": "Award",
          "recognizedBy": {
            "@type": "Organization",
            "name": "American Advertising Federation",
            "url": "https://www.aaf.org"
          },
          "dateCreated": "2024"
        }
      ],
      "award": [
        "7× American Advertising Awards Winner (2024)",
        "Fort Worth ADDYs 2024 Winner"
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Osmania University",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Computer Science Engineering"
          }
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Midwestern State University",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "MBA in Business Analytics"
          }
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Hewlett Packard Enterprise",
        "url": "https://www.hpe.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "nationality": "American"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://affansyed.com/#website",
      "url": "https://affansyed.com",
      "name": "Affan Syed Portfolio",
      "description": "Official website of Affan Syed - Technical Marketing Manager and Product Marketer for B2B AI",
      "publisher": {
        "@id": "https://affansyed.com/#person"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://affansyed.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}
      </head>
      <SpeedInsights />
      <body className="overflow-scroll overflow-x-hidden">
        <Animations>
          <main>
            <Header />
            <div className="flex flex-col bg-background text-foreground">
              <main className={`flex-grow ${inter.className}`}>{children}</main>
              <Analytics />
            </div>
            <Toaster />
          </main>
        </Animations>
      </body>
    </html>
  );
}
