import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const roadmapSections = [
  {
    title: 'Foundations of Backend Engineering',
    link: '/docs/foundations',
    description: 'Build a strong base with networking, programming paradigms, concurrency, and core security principles.',
  },
  {
    title: 'API Design & Development',
    link: '/docs/api-design',
    description: 'Master RESTful APIs, GraphQL, security practices, and comprehensive testing strategies for robust communication.',
  },
  {
    title: 'System Architecture & Design',
    link: '/docs/system-architecture',
    description: 'Understand architectural styles, DDD, advanced patterns (CQRS, SAGA), and essential design patterns from GoF to enterprise.',
  },
  {
    title: 'Data & Persistence',
    link: '/docs/data-and-persistence',
    description: 'Explore databases, performance optimization, transactions, caching strategies, and messaging paradigms for effective data management.',
  },
  {
    title: 'Deployment & Operations',
    link: '/docs/deployment-and-operations',
    description: 'Learn CI/CD, containerization (Docker, Kubernetes), and cloud deployment models for reliable production systems.',
  },
  {
    title: 'Observability & Performance',
    link: '/docs/observability-and-performance',
    description: 'Master logging, metrics, tracing, SLOs/SLAs, error budgets, and scaling strategies to build high-performance, resilient applications.',
  },
];

function SectionCard({ section }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="card">
        <div className="card__header">
          <h3>{section.title}</h3>
        </div>
        <div className="card__body">
          <p>{section.description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--primary button--block"
            to={section.link}>
            Explore Section
          </Link>
        </div>
      </div>
    </div>
  );
}

function RoadmapSections() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {roadmapSections.map((section, idx) => (
            <SectionCard key={idx} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={require('@site/static/img/roadmap-logo.png').default}
          alt="Roadmap Logo"
          className={styles.heroLogo}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/foundations">
            Start the Roadmap
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A guide to modern software architecture, from code to cloud.">
      <HomepageHeader />
      <main>
        <RoadmapSections />
      </main>
    </Layout>
  );
}
