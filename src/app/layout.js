import "./globals.css";

export const metadata = {
  title: "Suraj Kumar — Analytics Engineer & Data Engineer",
  description:
    "Portfolio of Suraj Kumar. Building reliable data systems and decision-grade analytics platforms. Specializing in dimensional modeling, ETL pipelines, revenue analytics, and cloud architecture.",
  keywords: [
    "Analytics Engineer",
    "Data Engineer",
    "dbt",
    "ETL",
    "Data Analyst",
    "PostgreSQL",
    "AWS",
    "Dimensional Modeling",
    "Revenue Analytics",
    "Supabase",
    "PySpark",
    "Snowflake",
    "Airflow",
    "Python",
  ],
  authors: [{ name: "Suraj Kumar" }],
  openGraph: {
    title: "Suraj Kumar — Analytics Engineer & Data Engineer",
    description:
      "Building reliable data systems and decision-grade analytics platforms.",
    url: "https://surajkumar.dev",
    siteName: "Suraj Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar — Analytics Engineer & Data Engineer",
    description:
      "Building reliable data systems and decision-grade analytics platforms.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-text antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
