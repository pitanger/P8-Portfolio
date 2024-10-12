import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Singleboxmodale from './Singleboxmodale';
import donnees from '../donnees.json';
import Projet1Image from '../images/images-portfolio/Projet-2-Booki.png';
import Projet2Image from '../images/images-portfolio/Projet-3-Sophie-Bluel.png';
import Projet3Image from '../images/images-portfolio/Projet-4-Nina-Carducci.png';
import Projet4Image from '../images/images-portfolio/Projet-5-Kasa.png';
import Projet5Image from '../images/images-portfolio/Projet-6-Vieux-Grimoire.png';
import Projet6Image from '../images/images-portfolio/Projet-7-Qwenta.png';

function Boxmodale({ text, soustexte, hauteur = "auto", largeur = "auto", Couleurfond = "white" }) {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        if (isCollapsed) {
            setTimeout(() => setStartAnimation(true), 50);
        } else {
            setStartAnimation(false);
        }
    }, [isCollapsed]);

    const handleClose = (e) => {
        if (e.target.classList.contains('modal-container')) {
            setIsCollapsed(false);
        }
    };

    const images = [Projet1Image, Projet2Image, Projet3Image, Projet4Image, Projet5Image, Projet6Image];

    return (
        <div>
            <div
                className="box"
                style={{
                    height: hauteur,
                    width: largeur,
                    backgroundColor: Couleurfond,
                    zIndex: isCollapsed ? 10 : 1,
                }}
                onClick={toggleCollapse}
            >
                <p className="text-style">{text}</p>
                <p className="sous-text-style">{soustexte}</p>
            </div>

            {isCollapsed && (
                <div className="modal-overlay" onClick={() => setIsCollapsed(false)}>
                    {hoveredProject && (
                        <>
                            <div className="description-projet-top">
                                <p><strong>{hoveredProject.problem}</strong></p>
                            </div>
                            <div className="description-projet-bottom">
                                <p>{hoveredProject.skills}</p>
                            </div>
                        </>
                    )}
                    <div className="modal-container" onClick={handleClose}>
                        {donnees.map((item, index) => (
                            <Singleboxmodale
                                key={index}
                                title={item.title}
                                description={item.description}
                                imagepath={images[index]}
                                githublink={item.githublink}
                                animationClass={startAnimation ? "fade-in" : "fade-out"}
                                index={index}
                                couleur={item.couleur}
                                onHover={() => setHoveredProject(item)}
                                onTouchStart={() => setHoveredProject(item)}
                                onMouseLeave={() => setHoveredProject(null)}
                            />
                        ))}
                        <div className="modal-close-button" onClick={() => setIsCollapsed(false)}>
                            <FontAwesomeIcon icon={faX} size="lg" style={{ color: "white" }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Boxmodale;
