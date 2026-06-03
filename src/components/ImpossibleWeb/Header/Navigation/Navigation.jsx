import scss from './Navigation.module.scss';

export default function Navigation({ navRef, isMenuOpen, onHeaderTextLinks, scrollToSection }) {
  return (
    <div className={scss.phoneAndButtonBlock}>
      <nav ref={navRef} className={`${scss.nav} ${isMenuOpen ? scss.navOpen : ''}`}>
        {onHeaderTextLinks.map((info, idx) => (
          <a key={idx} onClick={() => scrollToSection(info.linkToPage)}>
            {info.title}
          </a>
        ))}
        <button className={scss.ctaButtonPhone} onClick={() => scrollToSection('services')}>
          Start Project
        </button>
      </nav>

      <a
        className={scss.linkToPhone}
        href='tel:+380734516972'
        id='callToPhoneOnHeader'
        target='_blank'>
        +380 (73) 451-69-72
      </a>

      <button className={scss.ctaButton} onClick={() => scrollToSection('services')}>
        Start Project
      </button>
    </div>
  );
}
