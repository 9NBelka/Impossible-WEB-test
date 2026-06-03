import { Navigate } from 'react-router-dom';
import scss from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  const handleBack = () => {
    window.location.href = '/';
  };
  return (
    <div className={scss.backgroundBlock}>
      <div className={scss.container}>
        <div className={scss.notFoundPageBlock}>
          <h2>404</h2>
          <h3>Page not found</h3>
          <p className={scss.notFoundPageDescriptionOrange}>
            We seem to have lost the trail. Let's go back to the main thing?
          </p>
          <button className={scss.notFoundPageButton} onClick={handleBack}>
            To the main page
          </button>
        </div>
      </div>
    </div>
  );
}
