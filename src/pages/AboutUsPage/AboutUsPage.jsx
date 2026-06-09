import AboutUsHero from '../../components/ImpossibleWeb/AboutUsPageComponents/AboutUsHero/AboutUsHero';
import WhyUs from '../../components/ImpossibleWeb/AboutUsPageComponents/WhyUs/WhyUs';
import AboutUsNubmers from '../../components/ImpossibleWeb/AboutUsPageComponents/AboutUsNubmers/AboutUsNubmers';
import ContactForm from '../../components/ImpossibleWeb/ContactForm/ContactForm';
import Footer from '../../components/ImpossibleWeb/Footer/Footer';
import Header from '../../components/ImpossibleWeb/Header/Header';
import scss from './AboutUsPage.module.scss';
import AboutUsMainText from '../../components/ImpossibleWeb/AboutUsPageComponents/AboutUsMainText/AboutUsMainText';

export default function AboutUsPage({ onFooterAndHeaderTextLinksMain }) {
  const scrollToContact = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onHeaderTextLinks={onFooterAndHeaderTextLinksMain} />
      <AboutUsHero scrollToContact={scrollToContact} />
      <AboutUsMainText />
      <AboutUsNubmers />
      <WhyUs />
      <ContactForm />
      <Footer onFooterTextLinks={onFooterAndHeaderTextLinksMain} />
    </>
  );
}
