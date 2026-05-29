import scss from './ProvenResults.module.scss';
import { BsArrowRightShort, BsGear, BsMenuButtonWide, BsShopWindow } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ProvenResults() {
  const results = [
    {
      subTitle: 'E-commerce',
      icon: <BsShopWindow className={scss.cardIcon} />,
      title: 'Conversion Rate Increase',
      stats: '+45%',
      description:
        'Complete headless Shopify migration and checkout optimization for a D2C apparel brand.',
    },
    {
      subTitle: 'SaaS',
      icon: <BsMenuButtonWide className={scss.cardIcon} />,
      title: 'Organic Traffic Growth',
      stats: '2.5x',
      description:
        'Technical SEO overhaul and programmatic content generation structure implementation.',
    },
    {
      subTitle: 'Logistics',
      icon: <BsGear className={scss.cardIcon} />,
      title: 'Saved Monthly',
      stats: '120h',
      description:
        'Custom n8n automation pipeline bridging legacy ERP systems with modern dispatch tools.',
    },
  ];

  return (
    <section className={scss.results} id='cases'>
      <div className={scss.container}>
        <div className={scss.headerAndButton}>
          <div className={scss.header}>
            <p className={scss.subTitle}>Customer Results</p>
            <h2>Proven results</h2>
            <p>
              We measure success by the impact we create. Here is how we've helped our clients
              scale.
            </p>
          </div>
          <div className={scss.linkToOurCaseBlock}>
            <Link to={'/'} className={scss.linkToOurCase}>
              View all case studies <BsArrowRightShort className={scss.iconCase} />
            </Link>
          </div>
        </div>

        <div className={scss.flexBlock}>
          {results.map((service, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.cardIconBlock}>
                {service.icon}
                <p className={scss.subTitleIcon}>{service.subTitle}</p>
              </div>
              <p className={scss.statsText}>{service.stats}</p>
              <h3 className={scss.cartTitle}>{service.title}</h3>
              <p className={scss.cartDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
