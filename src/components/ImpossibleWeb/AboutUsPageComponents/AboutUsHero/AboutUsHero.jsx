import scss from './AboutUsHero.module.scss';

export default function AboutUsHero({ scrollToContact }) {
  return (
    <section className={scss.aboutUsHero}>
      <div className={scss.heroGradient} />
      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <h2 className={scss.title}>
              <span className={scss.brand}>About us </span>
              <br /> impossibleWEB
            </h2>

            <p className={scss.subtitle}>
              We build modern, fast and effective websites that help businesses grow and sell. From
              idea and design to promotion and advertising - everything is turnkey, with transparent
              terms and attention to every detail.
            </p>

            <div className={scss.ctaBlock}>
              <button className={scss.ctaButton} onClick={scrollToContact}>
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
