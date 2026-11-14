import { type BlogPost } from './types';

const author = { name: 'Affan Syed', handle: 'affansyed' };

export const posts: BlogPost[] = [
  {
    id: 'youtube-ai-infrastructure-field-day-6',
    title: 'Watch: HPE and Equinix at AI Infrastructure Field Day 6',
    source: 'YouTube · Tech Field Day',
    content:
      'The full session recording: how HPE and Equinix approach AI tokenomics, from private AI platforms and model operations to AI-ready data centers and governance.',
    url: 'https://www.youtube.com/watch?v=Y6JJMETYCSI',
    publishedAt: '2026-11-05',
    heroImage: 'https://i.ytimg.com/vi/Y6JJMETYCSI/maxresdefault.jpg',
    author
  },
  {
    id: 'tech-field-day-ai-infrastructure-6',
    title: 'HPE and Equinix Present at AI Infrastructure Field Day 6',
    source: 'Tech Field Day',
    content:
      'Presented with Elias Alagna and Jason Lee: a practical framework for AI tokenomics across three dimensions: make every token count, pay less per token, and govern every token.',
    url: 'https://techfieldday.com/appearance/hpe-and-equinix-present-at-ai-infrastructure-field-day-6/',
    publishedAt: '2026-11-04',
    heroImage:
      'https://techfieldday.com/wp-content/uploads/2026/10/IMG_3533-scaled.jpg',
    author
  },
  {
    id: 'mit-tr-stop-counting-tokens',
    title: 'Stop counting tokens, start counting what ships',
    source: 'MIT Technology Review',
    content:
      'Why rationing agentic coding backfires, and what to measure instead. A single agentic coding task can use 10 to 50 times more tokens than a basic chat prompt, so the real metric is what reaches production.',
    url: 'https://www.technologyreview.com/2026/11/02/1147702/stop-counting-tokens-start-counting-what-ships/',
    publishedAt: '2026-11-02',
    heroImage:
      'https://wp.technologyreview.com/wp-content/uploads/2026/10/iStock-2297734847.jpg?resize=1200,600',
    author
  }
];
