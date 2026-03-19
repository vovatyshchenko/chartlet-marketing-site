export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-database-less-plugins',
    title: 'Why Database-less plugins are the future of WordPress performance',
    description: 'WordPress plugins that avoid the database for content and configuration deliver faster sites.',
    date: '2026-03-07',
  },
];
