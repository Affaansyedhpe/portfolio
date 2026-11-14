import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience of Affan Syed: Technical Marketing Manager for HPE Private Cloud AI, previously leading 0-to-1 go-to-market for B2B AI products. 7× American Advertising Award winner.',
  alternates: { canonical: '/projects' }
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
