import scss from './AboutUsMainText.module.scss';

export default function AboutUsMainText() {
  return (
    <section className={scss.aboutUsMainText}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>ImpossibleWeb - your reliable partner in web development</h2>
        </div>
        <div className={scss.textBlock}>
          <p className={scss.text}>
            <strong>ImpossibleWeb</strong> - Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing
            Library, took a 1914 Cicero translation and scrambled it to make dummy text for
            Letraset's Body Type sheets. It has survived not only many decades, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised thanks
            to these sheets and more recently with desktop publishing software including versions of
            Lorem Ipsum.
          </p>

          <p className={scss.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since 1966, when designers at Letraset
            and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body Type sheets.{' '}
            <strong>It has survived not only many decades</strong>, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised thanks to
            these sheets and more recently with desktop publishing software including versions of
            Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
