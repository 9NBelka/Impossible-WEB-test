import MarqueeModule from 'react-fast-marquee';
import scss from './TrustedScreen.module.scss';

export default function TrustedScreen({ right }) {
  const imageTrusted = {
    trustedScreenImages: [
      '/images/trustUs/arhitectureLogoCube.png',
      '/images/trustUs/teamLeadLogoCube.png',
      '/images/trustUs/unitTestLogoCube.png',
      '/images/trustUs/adressabblesLogoCube.png',
      '/images/trustUs/ecsLogoCube.png',
      '/images/trustUs/crmMech.png',
      '/images/trustUs/logo_kyiv_term.png',
      '/images/trustUs/avtosferaLogo.png',
      '/images/trustUs/AZRLogo.png',
      '/images/trustUs/blackTowerLogo.png',
      '/images/trustUs/fireAutoLogo.png',

      '/images/trustUs/arhitectureLogoCube.png',
      '/images/trustUs/teamLeadLogoCube.png',
      '/images/trustUs/unitTestLogoCube.png',
      '/images/trustUs/adressabblesLogoCube.png',
      '/images/trustUs/ecsLogoCube.png',
      '/images/trustUs/crmMech.png',
      '/images/trustUs/logo_kyiv_term.png',
      '/images/trustUs/avtosferaLogo.png',
      '/images/trustUs/AZRLogo.png',
      '/images/trustUs/blackTowerLogo.png',
      '/images/trustUs/fireAutoLogo.png',
    ],
  };

  const Marquee = MarqueeModule.default;

  return (
    <div className={scss.trustedScreen}>
      {/* {!MainLandingA && (
        <div className={scss.header}>
          <h2>Нам довіряють</h2>
          <p>Нас знають, нам довіряють і рекомендують наші послуги.</p>
        </div>
      )} */}
      <Marquee direction={right} speed={50} gradient={false} className={scss.trustedScreenBlocks}>
        {imageTrusted.trustedScreenImages.map((img, index) => (
          <div key={index} className={scss.trustedScreenBlock}>
            <img src={img} alt='Scrolling' className={scss.trustedScreenImages} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
