import { Link } from 'react-router-dom';

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect } from 'react';

// Импортируем стили Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import scss from './OurProjects.module.scss';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

export default function OurProjects() {
  const projects = [
    {
      title: 'AZR Pivdennyy',
      image: '/images/project-azr.png',
      features: ['Specialist and service websites'],
    },
    {
      title: 'kiev term',
      image: '/images/project-kievtern.png',
      features: ['Business card sites'],
    },
    {
      title: 'mechOrbit',
      image: '/images/project-orbit.png',
      features: ['Specialist and service websites'],
    },
    {
      title: 'Avtoatmosfera',
      image: '/images/project-avtosfera.png',
      features: ['Specialist and service websites'],
    },
    {
      title: 'black tower basement',
      image: '/images/project-towerbasement.png',
      features: ['Business card sites'],
    },
    {
      title: 'Kantsedal Artem',
      image: '/images/project-logitrans.png',
      features: ['Specialist and service websites'],
    },

    {
      title: 'AZR Pivdennyy',
      image: '/images/project-azr.png',
      features: ['Specialist and service websites'],
    },
    {
      title: 'kiev term',
      image: '/images/project-kievtern.png',
      features: ['Business card sites'],
    },
    {
      title: 'mechOrbit',
      image: '/images/project-orbit.png',
      features: ['Specialist and service websites'],
    },
    {
      title: 'Avtoatmosfera',
      image: '/images/project-avtosfera.png',
      features: ['Specialist and service websites'],
    },
    {
      title: 'black tower basement',
      image: '/images/project-towerbasement.png',
      features: ['Business card sites'],
    },
    {
      title: 'Kantsedal Artem',
      image: '/images/project-logitrans.png',
      features: ['Specialist and service websites'],
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  useEffect(() => {
    if (!emblaApi) return;

    if (isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <section className={scss.projects} id='projects'>
      <div className={scss.container}>
        <div className={scss.headerAndButton}>
          <div className={scss.header}>
            <p className={scss.subTitle}>Our projects</p>
            <h2>Our projects</h2>
            <p>We create turnkey websites and advertising - all in one place</p>
          </div>
          <div className={scss.linkToOurCaseBlock}>
            <Link to={'/'} className={scss.linkToOurCase}>
              View all <BsArrowRightShort className={scss.iconCase} />
            </Link>
          </div>
        </div>

        <div
          className={scss.sliderWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <button className={scss.prevBtn} onClick={() => emblaApi?.scrollPrev()}>
            <BsArrowLeftShort className={scss.icon} />
          </button>

          <button className={scss.nextBtn} onClick={() => emblaApi?.scrollNext()}>
            <BsArrowRightShort className={scss.icon} />
          </button>

          <div className={scss.embla} ref={emblaRef}>
            <div className={scss.emblaContainer}>
              {projects.map((project, index) => (
                <div className={scss.emblaSlide} key={index}>
                  <div className={scss.slideProject}>
                    <div className={scss.imageBlock}>
                      <img src={project.image} alt={project.title} />
                    </div>

                    <h3 className={scss.titleProject}>{project.title}</h3>

                    <div>
                      {project.features.map((feature, featureIndex) => (
                        <button key={featureIndex} className={scss.featuresBlock}>
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={scss.linkToOurCaseBlockTabletPhone}>
          <Link to={'/'} className={scss.linkToOurCase}>
            View all <BsArrowRightShort className={scss.iconCase} />
          </Link>
        </div>
      </div>
    </section>
  );
}
