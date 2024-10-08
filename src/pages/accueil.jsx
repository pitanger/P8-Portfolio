import React, { useState, useEffect } from 'react';
import '../App.css';
import Nav from '../composants/nav';
import Box from '../composants/box';
import Circle from '../composants/circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Background from '../composants/background';
import Github from '../composants/github';
import Linkedin from '../composants/linkedin';
import Boxmodale from '../composants/boxmodale';
import Boxperience from '../composants/Boxperience.jsx';
import { Link } from 'react-router-dom';


function Accueil() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContentVisibility = (e) => {
    e.stopPropagation();
    setIsContentVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (!isContentVisible) {
        setIsContentVisible(true);
      }
    };

    if (!isContentVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isContentVisible]);

  return (
    <div className="accueil">
      <Background />
      <div className={isContentVisible ? "site-content visible" : "site-content hidden"}>
        <header>
          <Nav />
        </header>
        <main>
          <section className='left'>
            <div className='left__circles'>
              <div className="age">
                <Circle text="30" soustexte="LV" />
              </div>
              <div className="hide">
                <Circle
                  hidebutton={
                    <FontAwesomeIcon
                      icon={faArrowsRotate}
                      size="lg"
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={toggleContentVisibility}
                    />
                  }
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <div className="Bienvenue">
              <Box soustexte="Bienvenue sur mon Portfolio en ligne" isWhiteText={true} Couleurfond="black" />
            </div>
            <div className="reseaux">
              <div className="reseaux__youtube">
                <a href="https://www.youtube.com/@PitangerTrad/videos" target="_blank">
                  <Box Couleurfond="#FE080A" Icone={faPlay} />
                </a>
              </div>
              <div className="reseaux__autres">
                <div className="reseaux__autres--linkedin">
                  <a href="https://www.linkedin.com/in/mathieu-krause-915003150/" target="_blank">
                    <Linkedin />
                  </a>
                </div>
                <div className="reseaux__autres--avoir">
                  <a href='https://github.com/pitanger?tab=repositories' target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className='right'>
            <div className="nom">
              <Box text="Mathieu KRAUSE" soustexte="Développeur Full Stack" hauteur='100%' />
            </div>
            <div className='portfolio'>
              <div className='portfolio__informatique'>
                <div className='collapse-section'>
                  <Boxmodale text='Mon portfolio' soustexte="de développeur" hauteur="200px" />
                </div>
              </div>
              <div className='portfolio__traducteur'>
              <Link className="lien-router" to="/traduction">             
                <Box text="Mon portfolio" soustexte="de traducteur" />
                </Link >
              </div>
            </div>
            <div className='competences'>
              <div className='competences__intro'>
                <Box text="Introduction" />
              </div>
              <div className='competences__main'>
                <div className='competences__main--informatique'>
                  <Box text="Mes compétences" soustexte="informatiques" />
                </div>
                <div className='competences__main--autres'>
                  <Box text="Mes compétences" soustexte="transverses" />
                </div>
              </div>
            </div>
            <div className='expetdiplomes'>
              <div className='expetdiplomes__experiences'>
                <Boxperience text="Mes expériences" soustexte="professionnelles" />
              </div>
              <div className='competences__diplomes'>
                <Box text="Mes diplômes" soustexte="obtenus" />
              </div>
              <div className='competences__langues'>
                <Box text="Mes langues" soustexte="maîtrisées" survol={true} textSurvol="" soustextSurvol="Français : C2 Anglais : C2 Allemand : C1" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Accueil;
