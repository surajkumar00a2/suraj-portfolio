-import { Inter } from '@next/font/google'
+// import { Inter } from '@next/font/google'

export const metadata = {
  title: 'Suraj Kumar — Analytics Engineer & Data Engineer',
  description: 'Portfolio of Suraj Kumar. Building reliable data systems and decision-grade analytics platforms. Specializing in dimensional modeling, ETL pipelines, revenue analytics, and cloud architecture.',
  keywords: ['Analytics Engineer', 'Data Engineer', 'dbt', 'ETL', 'Data Analyst', 'PostgreSQL', 'AWS', 'Dimensional Modeling', 'Revenue Analytics', 'Supabase'],
  authors: [{ name: 'Suraj Kumar' }],
  creator: 'Suraj Kumar',
  publisher: 'Suraj Kumar',
  robots: { index: true, follow: true },
  metadataBase: new URL('https://surajkumar.dev'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Suraj Kumar — Analytics Engineer & Data Engineer',
    description: 'Building reliable data systems and decision-grade analytics platforms.',
    url: 'https://surajkumar.dev',
    siteName: 'Suraj Kumar',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Suraj Kumar - Analytics Engineer Portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Suraj Kumar — Analytics Engineer & Data Engineer', description: 'Building reliable data systems and decision-grade analytics platforms.', creator: '@surajkumar', images: ['/og-image.jpg'] },
  verification: { google: 'your-google-verification-code' }, // Add your verification code
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Suraj Kumar", jobTitle: "Analytics Engineer & Data Engineer", description: "Building reliable data systems and decision-grade analytics platforms", url: "https://surajkumar.dev", sameAs: ["https://linkedin.com/in/suraj-kumar-0700ba193", "https://github.com/surajkumar00a2"], knowsAbout: ["Analytics Engineering", "Data Engineering", "ETL Pipelines", "Dimensional Modeling", "PostgreSQL", "dbt", "AWS", "Python", "Data Quality", "Business Intelligence"], worksFor: { "@type": "Organization", name: "Freelance" } }) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
