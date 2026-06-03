import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { useEffect } from 'react';
// import MainLandingB from './pages/MainLandingB/MainLandingB';
import CookieConsent from './components/CookieConsent/CookieConsent';
import ImpossibleWeb from './pages/ImpossibleWeb/ImpossibleWeb';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

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
  return (
    <div>
      <CookieConsent />
      <ScrollToHash />
      <Routes>
        <Route path='/' element={<ImpossibleWeb />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
