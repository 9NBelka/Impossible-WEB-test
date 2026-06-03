// import { useCallback, useState } from 'react';
import { useEffect } from 'react';
// import BenefitsB from '../../components/ImpossibleWeb/BenefitsB/BenefitsB';
// import Cases from '../../components/ImpossibleWeb/Cases/Cases';
// import ContactB from '../../components/ImpossibleWeb/ContactB/ContactB';
// import FooterB from '../../components/ImpossibleWeb/FooterB/FooterB';
// import HeaderB from '../../components/ImpossibleWeb/HeaderB/HeaderB';
// import HeroScreenB from '../../components/ImpossibleWeb/HeroScreenB/HeroScreenB';
// import Process from '../../components/ImpossibleWeb/Process/Process';
// import ServicesB from '../../components/ImpossibleWeb/ServicesB/ServicesB';
// import TrustedScreen from '../../components/TrustedScreen/TrustedScreen';
// import { BsXLg } from 'react-icons/bs';
// import { FcSms } from 'react-icons/fc';
// import ChatBot from '../../components/MainLanding/ChatBot/ChatBot';
import './ImpossibleWeb.module.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ImpossibleWeb/Header/Header';
import HeroScreen from '../../components/ImpossibleWeb/HeroScreen/HeroScreen';
import TrustedScreen from '../../components/ImpossibleWeb/TrustedScreen/TrustedScreen';
import Services from '../../components/ImpossibleWeb/Services/Services';
import ProvenResults from '../../components/ImpossibleWeb/ProvenResults/ProvenResults';
import ContactForm from '../../components/ImpossibleWeb/ContactForm/ContactForm';
import Footer from '../../components/ImpossibleWeb/Footer/Footer';
import OurProjects from '../../components/ImpossibleWeb/OurProjects/OurProjects';

export default function ImpossibleWeb() {
  const onFooterAndHeaderTextLinksMain = [
    {
      title: 'Services',
      linkToPage: 'services',
    },
    // {
    //   title: 'Переваги',
    //   linkToPage: 'benefits',
    // },
    {
      title: 'Work',
      linkToPage: 'cases',
    },
    // {
    //   title: 'Процес',
    //   linkToPage: 'process',
    // },
    {
      title: 'Contact',
      linkToPage: 'contacts',
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contacts') {
      // Прокрутка к элементу или рендеринг компонента
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='min-h-screen'>
      <Header onHeaderTextLinks={onFooterAndHeaderTextLinksMain} />
      <HeroScreen />
      <TrustedScreen />
      <Services />
      <ProvenResults />
      <OurProjects />
      <ContactForm />
      <Footer onFooterTextLinks={onFooterAndHeaderTextLinksMain} />
    </div>
  );
}
