import React, { useState } from 'react';
import donnees from '../donneestrad.json';
import DaysOfDoom from '../images/images-traduction/Days-of-Doom.webp';
import Contain from '../images/images-traduction/Contain.jpg';
import Wisper from '../images/images-traduction/Wisper.jpg';
import GemstoneLegends from '../images/images-traduction/Gemstone-Legends.jpg';
import SuperCatTalesPaws from '../images/images-traduction/Super-Cat-Tales-Paws.jpg';
import RoyalMerge from '../images/images-traduction/Royal-Merge.webp';
import CastleWarIsleIsland from '../images/images-traduction/Castle-War-Isle-Island.png';
import TheInvincible from '../images/images-traduction/The-Invincible.jpg';

const getImage = (title) => {
    switch(title) {
        case "Days of Doom":
            return DaysOfDoom;
        case "Contain":
            return Contain;
        case "Wisper":
            return Wisper;
        case "Gemstone Legends":
            return GemstoneLegends;
        case "Super Cat Tales: Paws":
            return SuperCatTalesPaws;
        case "Royal Merge!":
            return RoyalMerge;
        case "Castle War: Idle Island":
            return CastleWarIsleIsland;
        case "The Invincible":
            return TheInvincible;
        default:
            return null;
    }
};

const TradCollapse = () => {
  const [openTraduction, setOpenTraduction] = useState(false);
  const [openRelecture, setOpenRelecture] = useState(false);

  const traductionData = donnees.filter(d => d.travail === "Traduction");
  const relectureData = donnees.filter(d => d.travail === "Relecture");

  const handleLinkClick = (e, link) => {
    e.stopPropagation(); 
    window.open(link, "_blank");
  };

  return (
    <div className="collapses-container">
      <div className="collapse traduction-collapse" onClick={() => setOpenTraduction(!openTraduction)}>
        <h2>Traduction</h2>
        <div className={`collapse-content ${openTraduction ? 'open' : ''}`}>
          <div className="project-class-left" style={{ width: '70%' }}>
            <p style={{ fontSize: '30px', width:'30%' }}>Nom</p>
            <p style={{ fontSize: '25px', width:'30%' }}>Développeur</p>
            <p style={{ fontSize: '20px', width:'40%' }}>Description</p>
          </div>
          {traductionData.map((item) => (
            <div key={item.index} className="project-item">
              <div className="project-text" style={{ width: '70%' }}>
                <p style={{ fontSize: '30px', width:'30%' }}>{item.title}</p>
                <p style={{ fontSize: '25px', width:'30%' }}>{item.developper}</p>
                <p style={{ fontSize: '20px', width:'40%' }}>{item.description}</p>
              </div>
              <div className="project-image" style={{ width: '30%' }}>
                <img 
                  src={getImage(item.title)} 
                  alt={item.title} 
                  onClick={(e) => handleLinkClick(e, item.link)}
                  style={{ cursor: 'pointer' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="collapse relecture-collapse" onClick={() => setOpenRelecture(!openRelecture)}>
        <h2>Relecture</h2>
        <div className={`collapse-content ${openRelecture ? 'open' : ''}`}>
          <div className="project-class-right" style={{ width: '70%' }}>
            <p style={{ fontSize: '30px', width:'30%' }}>Nom</p>
            <p style={{ fontSize: '25px', width:'30%' }}>Développeur</p>
            <p style={{ fontSize: '20px', width:'40%' }}>Description</p>
          </div>
          {relectureData.map((item) => (
            <div key={item.index} className="project-item">
              <div className="project-image" style={{ width: '30%' }}>
                <img 
                  src={getImage(item.title)} 
                  alt={item.title} 
                  onClick={(e) => handleLinkClick(e, item.link)}
                  style={{ cursor: 'pointer' }} 
                />
              </div>
              <div className="project-text" style={{ width: '70%' }}>
                <p style={{ fontSize: '30px', width:'30%' }}>{item.title}</p>
                <p style={{ fontSize: '25px', width:'30%' }}>{item.developper}</p>
                <p style={{ fontSize: '20px', width:'40%' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default TradCollapse;
