import scss from './Services.module.scss';
import { BsCheckCircle, BsCodeSlash, BsJournalText, BsLightningCharge } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';

export default function Services() {
  const services = [
    {
      icon: <BsCodeSlash className={scss.cardIcon} />,
      title: 'Custom Web Development',
      description:
        'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
      features: ['Headless Commerce', 'Web Applications', 'API Integration'],
    },
    {
      icon: <BsJournalText className={scss.cardIcon} />,
      title: 'High-Converting Landing Pages',
      description:
        'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
      features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
    },
    {
      icon: <VscGraph className={scss.cardIcon} />,
      title: 'Technical SEO',
      description:
        'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
      features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
    },
    {
      icon: <BsLightningCharge className={scss.cardIcon} />,
      title: 'Workflow Automation',
      description:
        'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
      features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
    },
  ];

  return (
    <section className={scss.services} id='services'>
      <div className={scss.container}>
        <div className={scss.header}>
          <p className={scss.subTitle}>services</p>
          <h2>Core capabilities</h2>
          <p>
            We focus on high-impact services that directly influence your bottom line. No fluff,
            just results.
          </p>
        </div>

        <div className={scss.flexBlock}>
          {services.map((service, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.cardIconBlock}>{service.icon}</div>
              <h3 className={scss.cartTitle}>{service.title}</h3>
              <p className={scss.cartDescription}>{service.description}</p>
              <ul className={scss.features}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <BsCheckCircle className={scss.iconList} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
