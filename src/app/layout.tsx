import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karthick Prassana | Software Engineer & Systems Developer',
  description: 'Personal portfolio & engineering notebook of Karthick Prassana — Computer Science student at VIT-AP (CGPA 9.03) building Spring Boot microservices, Kafka event pipelines, Qdrant vector search platforms, and Flutter mobile apps.',
  keywords: [
    'Karthick Prassana',
    'Software Engineer',
    'Spring Boot',
    'Apache Kafka',
    'Next.js',
    'TypeScript',
    'Qdrant Vector DB',
    'Flutter',
    'VIT-AP',
    'Backend Engineer',
    'Full Stack Developer'
  ],
  authors: [{ name: 'Karthick Prassana' }],
  openGraph: {
    title: 'Karthick Prassana | Software Engineer',
    description: 'Software Engineer specializing in backend systems, event-driven pipelines, AI vector retrieval, and mobile engineering.',
    url: 'https://github.com/iamprassana',
    siteName: 'Karthick Prassana Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[var(--accent-emerald)] selection:text-slate-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
