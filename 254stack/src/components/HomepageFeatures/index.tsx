import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Source First',
    icon: '🌟',
    description: (
      <>
        All our projects are open source, ensuring transparency, 
        collaboration, and sustainable development for Africa's digital future.
      </>
    ),
  },
  {
    title: 'Digital Public Infrastructure',
    icon: '🏗️',
    description: (
      <>
        Building the foundational digital systems that governments and 
        organizations across Africa need to serve their citizens effectively.
      </>
    ),
  },
  {
    title: 'Community Driven',
    icon: '🤝',
    description: (
      <>
        A diverse community of developers, designers, and innovators from 
        across Kenya and Africa working together to solve real problems.
      </>
    ),
  },
  {
    title: 'Scalable Solutions',
    icon: '📈',
    description: (
      <>
        Our solutions are designed to scale from local implementations to 
        continent-wide deployments, ensuring maximum impact.
      </>
    ),
  },
  {
    title: 'Knowledge Sharing',
    icon: '📚',
    description: (
      <>
        We believe in sharing knowledge and best practices to accelerate 
        digital transformation across the continent.
      </>
    ),
  },
  {
    title: 'Innovation Hub',
    icon: '💡',
    description: (
      <>
        A space for experimenting with cutting-edge technologies and 
        methodologies to solve uniquely African challenges.
      </>
    ),
  },
];

function Feature({icon, title, description}: FeatureItem): JSX.Element {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>Why Choose 254stack?</h2>
          <p className={styles.featuresSubtitle}>
            We're building more than just software - we're creating the digital 
            infrastructure that will power Africa's future.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}