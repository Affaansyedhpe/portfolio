import { Metadata } from 'next';
import Layout from '@/components/layout';
import { BlogHero } from './components/BlogHero';
import { BlogList } from './components/BlogList';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles and talks by Affan Syed on AI infrastructure, agentic AI, AI tokenomics, and taking AI products to market, including MIT Technology Review and Tech Field Day.',
  alternates: { canonical: '/blog' }
};

export default function Page() {
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <Layout title={'Blog'}>
      <div className="container mx-auto px-4 py-16">
        <BlogHero />
        <BlogList posts={sortedPosts} />
      </div>
    </Layout>
  );
}
