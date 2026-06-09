import scss from './AboutUsNubmers.module.scss';

export default function AboutUsNubmers() {
  return (
    <section className={scss.aboutUsNubmers}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>ImpossibleWeb in figures</h2>
        </div>
        <div className={scss.stats}>
          <div className={scss.stat}>
            <strong>12+</strong>
            <span>years of experience</span>
          </div>
          <div className={scss.stat}>
            <strong>10+</strong>
            <span>Years in web creation</span>
          </div>
          <div className={scss.stat}>
            <strong>100+</strong>
            <span>projects</span>
          </div>
          <div className={scss.stat}>
            <strong>200+</strong>
            <span>Design options</span>
          </div>
          <div className={scss.stat}>
            <strong>98%</strong>
            <span>Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  );
}
