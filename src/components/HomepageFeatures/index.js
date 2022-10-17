import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Privacy',
    Svg: require('@site/static/img/privacy.svg').default,
    description: (
      <>
        Focus on Privacy
      </>
    ),
  },
  {
    title: 'Productivity',
    Svg: require('@site/static/img/desk.svg').default,
    description: (
      <>
        Recently Start More Researching about Open Source Projects
        yes it's a kind of Productivity for me
      </>
    ),
  },
  {
    title: 'Powered by Open Source',
    Svg: require('@site/static/img/love.svg').default,
    description: (
      <>
        things here I shared all are open-source projects built by the 
        people who ❤ Open Source
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
