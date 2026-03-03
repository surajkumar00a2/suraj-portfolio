const projects = [
  {
    id: 1,
    title: "Enterprise Revenue Intelligence Platform",
    description:
      "Production revenue analytics platform on £10.3M of retail transactions. Identified £442K in pricing variance (4.3% of revenue) using statistical anomaly detection across 541,909 transactions.",
    stack: ["PostgreSQL", "dbt", "Python", "Looker Studio", "Supabase"],
    achievements: [
      "Z-score price anomaly detection across 33,532 flagged transactions",
      "Star schema: 3 fact tables + 5 dimensions with Type 2 SCD",
      "Flagged 85% UK revenue concentration as critical single-market dependency",
      "3-method MRR forecasting ensemble with seasonality recognition",
      "4 live executive dashboards on Supabase via Looker Studio",
    ],
    github:
      "https://github.com/surajkumar00a2/personal-portfolio-projects/tree/main/revenue_intelligence_platform",
    liveDashboard:
      "https://lookerstudio.google.com/reporting/fae2317d-afb3-4b33-a465-373323f13600",
  },
  {
    id: 2,
    title: "Weather Data Platform with Quality Monitoring",
    description:
      "Serverless data lake on AWS with continuous data quality monitoring at ingestion time. Detects schema drift and anomalies before dashboards break.",
    stack: ["Python", "AWS Lambda", "S3", "Glue", "Athena", "CloudWatch"],
    achievements: [
      "Bronze → Silver → Gold ETL architecture",
      "Real-time quality metrics: completeness, consistency, timeliness",
      "CloudWatch dashboards & automated alerting",
      "Event-driven, cost-optimized (~$1.60/month)",
    ],
    github:
      "https://github.com/surajkumar00a2/personal-portfolio-projects/tree/main/weather_data_platform",
    liveDashboard: null,
  },
  {
    id: 3,
    title: "Automated Stock & News Data Pipeline",
    description:
      "Orchestrated ETL pipeline extracting daily stock prices and financial news with validation, retries, and scheduling via Apache Airflow.",
    stack: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
    achievements: [
      "Daily OHLC stock ingestion + financial news scraping",
      "Airflow DAGs with built-in data quality checks",
      "Dockerized setup with PostgreSQL persistence",
      "Retry logic and automated scheduling",
    ],
    github:
      "https://github.com/surajkumar00a2/personal-portfolio-projects/tree/main/stock_news_pipeline",
    liveDashboard: null,
  },
  {
    id: 4,
    title: "Multi-Source E-Commerce Price Tracker",
    description:
      "System for tracking product prices across e-commerce platforms with historical trend analysis and interactive visualization.",
    stack: ["Python", "Selenium", "PostgreSQL", "Streamlit"],
    achievements: [
      "Multi-site web scraping with Selenium automation",
      "Scheduled price tracking across platforms",
      "Historical trend analysis & price comparison",
      "Interactive Streamlit dashboard",
    ],
    github:
      "https://github.com/surajkumar00a2/personal-portfolio-projects/tree/main/ecommerce_price_tracker",
    liveDashboard: null,
  },
];

export default projects;