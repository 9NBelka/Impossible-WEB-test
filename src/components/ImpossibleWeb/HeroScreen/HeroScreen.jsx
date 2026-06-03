import scss from './HeroScreen.module.scss';

export default function HeroScreen() {
  const scrollToContact = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={scss.hero} id='hero'>
      <div className={scss.heroGradient} />

      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <p className={scss.hashtag}>We Do #impossibleWeb</p>

            <h1 className={scss.title}>
              <span className={scss.brand}>impossibleWeb</span>
              <br /> is your partner in web development
            </h1>

            <p className={scss.subtitle}>
              Premium web development, technical SEO, and workflow automation for modern e-commerce
              and fast-growing tech brands.
            </p>

            <div className={scss.ctaBlock}>
              <button className={scss.ctaButton} onClick={scrollToContact}>
                Book Consultation
              </button>
              <div className={scss.ctaNote}>View Portfolio</div>
            </div>

            <div className={scss.stats}>
              <div className={scss.stat}>
                <strong>8+</strong>
                <span>years of experience</span>
              </div>
              <div className={scss.stat}>
                <strong>200+</strong>
                <span>projects</span>
              </div>
              <div className={scss.stat}>
                <strong>98%</strong>
                <span>Client Retention</span>
              </div>
            </div>
          </div>

          {/* <div className={scss.graphics}>
            <div className={scss.iconGrid}>
              <div className={scss.iconCardBlock}>
                <BsCode className={scss.iconCard} />
                <span>Web Dev</span>
              </div>
              <div className={scss.iconCardBlock}>
                <BsGraphUpArrow className={scss.iconCard} />
                <span>ROI Growth</span>
              </div>
              <div className={scss.iconCardBlock}>
                <BsLightningCharge className={scss.iconCard} />
                <span>AI Automation</span>
              </div>
              <div className={scss.iconCardBlock}>
                <BsRocketTakeoff className={scss.iconCard} />
                <span>Digital Ads</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
