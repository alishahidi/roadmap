import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)'}}>
        <img src={require('@site/static/img/logo.svg').default} alt="Roadmap Logo" style={{width: 120, marginBottom: 24}} />
        <h1 style={{fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: 12}}>Senior Developer Roadmap</h1>
        <p style={{fontSize: '1.25rem', color: '#475569', maxWidth: 600, textAlign: 'center', marginBottom: 32}}>
          Welcome! This site is your interactive, visual guide to mastering modern software architecture and senior engineering skills. Explore the roadmap to level up your career.
        </p>
        <Link
          className="button button--primary button--lg"
          style={{fontSize: '1.1rem', padding: '0.75em 2em'}}
          to="/docs/part1"
        >
          Start the Roadmap
        </Link>
      </main>
    </Layout>
  );
}
