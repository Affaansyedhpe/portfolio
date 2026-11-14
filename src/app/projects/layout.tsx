import { ReactNode } from 'react';
import { Metadata } from 'next';

// Experiences is hidden for now: unlinked from nav and sitemap, kept out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
