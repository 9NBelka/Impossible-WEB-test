import MarqueeModule from 'react-fast-marquee';
import scss from './DiscountBlock.module.scss';

export default function DiscountBlock({ right, scrollToSection }) {
  const textsTrusted = {
    texts: [
      'on first order the discount is -15%',
      'on first order the discount is -15%',
      'on first order the discount is -15%',
      'on first order the discount is -15%',
      'on first order the discount is -15%',
      'on first order the discount is -15%',
      'on first order the discount is -15%',
      'on first order the discount is -15%',
    ],
  };

  const Marquee = MarqueeModule.default;

  return (
    <div className={scss.discountBlock} onClick={() => scrollToSection('contacts')}>
      <Marquee direction={right} speed={50} gradient={false}>
        {textsTrusted.texts.map((text, index) => (
          <div key={index} className={scss.trustedScreenBlock}>
            <p>{text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
