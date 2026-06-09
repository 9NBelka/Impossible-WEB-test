import { useState } from 'react';
import ProjectsHero from '../../components/ImpossibleWeb/AllOurProjectsPageComponents/ProjectsHero/ProjectsHero';
import ContactForm from '../../components/ImpossibleWeb/ContactForm/ContactForm';
import Footer from '../../components/ImpossibleWeb/Footer/Footer';
import Header from '../../components/ImpossibleWeb/Header/Header';
import scss from './AllOurProjectsPage.module.scss';

export default function AllOurProjectsPage({ projects, onFooterAndHeaderTextLinksMain }) {
  const [sortOrder, setSortOrder] = useState('newest');
  const [activeFilter, setActiveFilter] = useState(null);

  const scrollToContact = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allFeatures = [...new Set(projects.flatMap((project) => project.features))];

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.features.includes(activeFilter))
    : projects;

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const dateA = a.dateCreate ? parseDate(a.dateCreate) : new Date(0);
    const dateB = b.dateCreate ? parseDate(b.dateCreate) : new Date(0);

    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  return (
    <>
      <Header onHeaderTextLinks={onFooterAndHeaderTextLinksMain} />
      <ProjectsHero scrollToContact={scrollToContact} />
      <section className={scss.projectsMain} id='projects'>
        <div className={scss.container}>
          {/* Блок управления: сортировка + фильтры */}
          <div className={scss.controlsWrapper}>
            <div className={scss.filtersWrapper}>
              {/* Фильтры по features */}
              <button
                className={`${scss.filterButton} ${activeFilter === null ? scss.active : ''}`}
                onClick={() => setActiveFilter(null)}>
                All projects
              </button>

              {allFeatures.map((feature) => (
                <button
                  key={feature}
                  className={`${scss.filterButton} ${activeFilter === feature ? scss.active : ''}`}
                  onClick={() => setActiveFilter(feature)}>
                  {feature}
                </button>
              ))}
            </div>
            {/* Сортировка */}
            <div className={scss.sortWrapper}>
              <button
                className={scss.sortButton}
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}>
                {sortOrder === 'newest' ? '↓ Newest' : '↑ Oldest'}
              </button>
            </div>
          </div>

          <div className={scss.projectBlocks}>
            {sortedProjects.map((project, index) => (
              <div className={scss.projectBlock} key={index}>
                <div className={scss.imageBlock}>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3 className={scss.titleProject}>{project.title}</h3>
                {project.descriptions && <p className={scss.descText}>{project.descriptions}</p>}
                <div className={scss.featuresAndTextBlock}>
                  {project.dateCreate && (
                    <>
                      <p className={scss.dateText}>{project.dateCreate}</p>
                      <span>/</span>
                    </>
                  )}
                  {project.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className={scss.featuresBlock}>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer onFooterTextLinks={onFooterAndHeaderTextLinksMain} />
    </>
  );
}
