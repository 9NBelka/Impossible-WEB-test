import scss from './WhyUs.module.scss';
import { BsArrowRepeat, BsPatchCheck, BsSliders } from 'react-icons/bs';

export default function WhyUs() {
  const aboutUsText = [
    {
      icon: <BsSliders className={scss.cardIcon} />,
      title: 'Personalised approach',
      description: 'Each project is tailored to meet the goals and specifics of your business.',
    },
    {
      icon: <BsArrowRepeat className={scss.cardIcon} />,
      title: 'Full service',
      description:
        'From idea and design to promotion and advertising - everything is turnkey, without extra contractors and overpayments.',
    },
    {
      icon: <BsPatchCheck className={scss.cardIcon} />,
      title: 'Real results',
      description:
        'We build websites that bring in customers and sales, not just a "web presence".',
    },
  ];

  return (
    <section className={scss.whyUs} id='aboutUs'>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>Why choose impossibleWeb</h2>
          <p>We don't just create websites, we create effective tools for growing your business.</p>
        </div>
        <div className={scss.flexBlock}>
          {aboutUsText.map((text, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.cardIconBlock}>{text.icon}</div>
              <h3 className={scss.cartTitle}>{text.title}</h3>
              <p className={scss.cartDescription}>{text.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
