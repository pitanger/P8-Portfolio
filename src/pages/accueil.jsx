import React, { useState, useEffect } from 'react';
import '../App.css';
import Nav from '../composants/nav';
import Box from '../composants/box';
import Circle from '../composants/circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Background from '../composants/background';
import Reseaux from "../composants/reseaux";
import backgroundgithub from "../images/github.png";
import backgroundlinkedin from "../images/linkedin.png";
import backgroundyoutube from "../images/youtube.png";
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
                <Circle text="30" soustexte="ÂGE" />
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
              <Box id="bienvenue-content" soustexte="Bienvenue sur mon Portfolio en ligne" isWhiteText={true} Couleurfond="black" hauteur="80px"/>
            </div>
            <div className="reseaux">
              <div className="reseaux__youtube">
                <a href="https://www.youtube.com/@PitangerTrad/videos" target="_blank">
                  <Reseaux imageSrc={backgroundyoutube} altText="GitHub Profile" />
                </a>
              </div>
              <div className="reseaux__autres">
                <div className="reseaux__autres--linkedin">
                  <a href="https://www.linkedin.com/in/mathieu-krause-915003150/" target="_blank">
                    <Reseaux imageSrc={backgroundlinkedin} altText="LinkedIn Profile" />
                  </a>
                </div>
                <div className="reseaux__autres--avoir">
                  <a href='https://github.com/pitanger?tab=repositories' target="_blank">
                    <Reseaux imageSrc={backgroundgithub} altText="GitHub Profile" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className='right'>
            <div className="nom">
              <Box text="Mathieu KRAUSE" soustexte="Développeur Full Stack" />
            </div>
            <div className='portfolio'>
              <div className='portfolio__informatique'>
                <div className='collapse-section'>
                  <Boxmodale text='Mon portfolio' soustexte="de développeur" hauteur="150px"/>
                </div>
              </div>
              <div className='portfolio__traducteur'>
              <Link className="lien-router" to="/traduction">             
                <Box text="Mon portfolio" soustexte="de traducteur"/>
                </Link >
              </div>
            </div>
            <div className='competences'>
              <div className='competences__intro'>
              <Link className="lien-intro" to="/introduction">             
                <Box text="Introduction" soustexte="" Couleurfond="#02A9DF" Couleurtexte='white' hauteur="150px"/>
              </Link >
              </div>
              <div className='competences__main'>
                <div className='competences__main--informatique'>
                  <Box text="Compétences" soustexte="informatiques" survol={true} soustextSurvol="- HTML,- CSS,- JS,- ReactJS,- NodeJS,- Optimisation SEO" Couleurfond="#02A9DF" Couleurtexte='white'/>
                </div>
                <div className='competences__main--autres'>
                  <Box text="Compétences" soustexte="transverses" survol={true} soustextSurvol="- Pédagogie de l'enseignement,- Montage vidéo,- Suite Adobe,- Suite Photoshop" Couleurfond="#02A9DF" Couleurtexte='white'/>
                </div>
              </div>
            </div>
            <div className='expetdiplomes'>
              <div className='expetdiplomes__experiences'>
                <Boxperience text="Expériences" soustexte="professionnelles" />
              </div>
              <div className='competences__autres'>
                <div className='competences__diplomes'>
                  <Box text="Diplômes" soustexte="obtenus" survol={true} textSurvol="" soustextSurvol="- Licence d'anglais,- Master en Rédaction et Traduction,- Certification OpenClassrooms dev web" />
                </div>
                <div className='competences__langues'>
                  <Box text="Langues" soustexte="maîtrisées" survol={true} soustextSurvol="- Français : C2 - Anglais : C2 - Allemand : C1 - Japonais : A2" />
                </div>
              </div>
            </div>
            <div className='reseauxR'>
              <a href="https://www.youtube.com/@PitangerTrad/videos" target="_blank">
                <div className='youtubeR'>
                  <Reseaux imageSrc={backgroundyoutube} altText="GitHub Profile" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mathieu-krause-915003150/" target="_blank">
                <div className='linkedinR'>
                  <Reseaux imageSrc={backgroundlinkedin} altText="LinkedIn Profile" />
                </div>
              </a>
              <a href='https://github.com/pitanger?tab=repositories' target="_blank">
                <div className='githubR'>
                  <Reseaux imageSrc={backgroundgithub} altText="GitHub Profile" />
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Accueil;
