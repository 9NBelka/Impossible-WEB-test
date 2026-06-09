import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { useEffect } from 'react';
// import MainLandingB from './pages/MainLandingB/MainLandingB';
import CookieConsent from './components/CookieConsent/CookieConsent';
import ImpossibleWeb from './pages/ImpossibleWeb/ImpossibleWeb';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AllOurProjectsPage from './pages/AllOurProjectsPage/AllOurProjectsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  const onFooterAndHeaderTextLinksMain = [
    {
      title: 'Home',
      linkToPage: '/',
    },
    {
      title: 'Services',
      linkToPage: '/services',
    },
    {
      title: 'Projects',
      linkToPage: '/projects',
    },
    {
      title: 'About us',
      linkToPage: '/about-us',
    },
    // {
    //   title: 'Contact',
    //   linkToPage: 'contacts',
    // },
  ];

  const projects = [
    {
      title: 'AZR Pivdennyy',
      image: '/images/projectsImages/project-azr.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '20.05.2026',
    },
    {
      title: 'kiev term',
      image: '/images/projectsImages/project-kievtern.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Business card sites'],
      dateCreate: '23.02.2025',
    },
    {
      title: 'mechOrbit',
      image: '/images/projectsImages/project-orbit.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '01.05.2026',
    },
    {
      title: 'Avtoatmosfera',
      image: '/images/projectsImages/project-avtosfera.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '30.09.2025',
    },
    {
      title: 'sxShop',
      image: '/images/projectsImages/project-sShop.webp',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Online shops'],
      dateCreate: '01.06.2026',
    },
    {
      title: 'Kantsedal Artem',
      image: '/images/projectsImages/project-logitrans.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '27.05.2026',
    },
    {
      title: 'UtilityAI',
      image: '/images/projectsImages/project-utilityAi.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '13.12.2022',
    },
    {
      title: 'Entity Component System',
      image: '/images/projectsImages/project-ecs.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '26.01.2024',
    },
    {
      title: 'ARCHITECTURE UNITY GAMES',
      image: '/images/projectsImages/project-architecture.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '31.08.2022',
    },
    {
      title: 'ADDRESSABLES: ANESTHESIA',
      image: '/images/projectsImages/project-addressables.png',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.',
      features: ['Specialist and service websites'],
      dateCreate: '13.10.2023',
    },
  ];

  return (
    <div>
      <CookieConsent />
      <ScrollToHash />
      <Routes>
        <Route
          path='/'
          element={
            <ImpossibleWeb
              projects={projects}
              onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain}
            />
          }
        />
        <Route
          path='/projects'
          element={
            <AllOurProjectsPage
              projects={projects}
              onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain}
            />
          }
        />
        <Route
          path='/about-us'
          element={<AboutUsPage onFooterAndHeaderTextLinksMain={onFooterAndHeaderTextLinksMain} />}
        />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
