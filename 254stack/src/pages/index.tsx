import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Building Africa's Digital Future
            </h1>
            <p className={styles.heroSubtitle}>
              A community of tech enthusiasts creating open source solutions for 
              Digital Public Infrastructure across Kenya and Africa
            </p>
            <div className={styles.heroButtons}>
              {/* <Link
                className={clsx('button button--secondary button--lg', styles.ctaButton)}
                to="/docs/getting-started">
                Get Started
              </Link> */}
              <Link
                className={clsx('button button--secondary button--lg', styles.ctaButton)}
                to="/">
                Get Started
              </Link>
              {/* <Link
                className={clsx('button button--outline button--lg', styles.ctaButton)}
                to="/community">
                Join Community Discord coming soon
              </Link> */}
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeTitle}>building-africa.ts</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>interface</span> <span className={styles.variable}>Mission</span> {'{'}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  vision:</span> <span className={styles.string}>string</span>;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  scope:</span> <span className={styles.string}>string</span>;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  approach:</span> <span className={styles.string}>string</span>;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  community:</span> <span className={styles.string}>string</span>;
                </div>
                <div className={styles.codeLine}>{'}'}</div>
                <div className={styles.codeLine}></div>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>mission</span>: <span className={styles.variable}>Mission</span> = {'{'}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  vision:</span> <span className={styles.string}>'Digital Public Infrastructure'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  scope:</span> <span className={styles.string}>'Kenya & Africa'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  approach:</span> <span className={styles.string}>'Open Source'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  community:</span> <span className={styles.string}>'254stack'</span>
                </div>
                <div className={styles.codeLine}>{'};'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern}></div>
      </div>
    </header>
  );
}

// function StatsSection(): JSX.Element {
//   return (
//     <section className={styles.statsSection}>
//       <div className="container">
//         <div className={styles.statsGrid}>
//           <div className={styles.statItem}>
//             <div className={styles.statNumber}>500+</div>
//             <div className={styles.statLabel}>Contributors</div>
//           </div>
//           <div className={styles.statItem}>
//             <div className={styles.statNumber}>50+</div>
//             <div className={styles.statLabel}>Open Source Projects</div>
//           </div>
//           <div className={styles.statItem}>
//             <div className={styles.statNumber}>10M+</div>
//             <div className={styles.statLabel}>People Impacted</div>
//           </div>
//           <div className={styles.statItem}>
//             <div className={styles.statNumber}>15+</div>
//             <div className={styles.statLabel}>Countries</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function CallToAction(): JSX.Element {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Build Africa's Digital Future?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of developers, designers, and innovators who are creating 
            the infrastructure that will power Africa's digital transformation.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="https://github.com/254-stack">
              View on GitHub
            </Link>
            {/* <Link
              className={clsx('button button--outline button--lg', styles.ctaButton)}
              to="/docs/contributing">
              Start Contributing
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Building Africa's Digital Future`}
      description="A community of tech enthusiasts creating open source solutions for Digital Public Infrastructure across Kenya and Africa">
      <HomepageHeader />
      <main>
        {/* <StatsSection /> */}
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}