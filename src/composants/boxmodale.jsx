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

function Boxmodale ({ text, soustexte, hauteur = "auto", largeur = "auto", Couleurfond = "white" }) {
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
        e.stopPropagation();
        setIsCollapsed(false);
    };

    const boxStyle = {
        height: hauteur,
        width: largeur,
        backgroundColor: Couleurfond,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "1px solid #000",
        transition: "height 0.5s ease, width 0.5s ease",
        position: "relative",
        zIndex: isCollapsed ? 10 : 1,
    };

    const textstyle = {
        fontSize: "30px",
        color: "#323232",
        transform: "scaleY(1.4)",
    };

    const soustextstyle = {
        fontSize: "15px",
        color: "#323232",
        transform: "scaleY(1.4)",
    };

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9,
        display: isCollapsed ? "block" : "none", 
    };

    const collapseContainerStyle = {
        display: isCollapsed ? "grid" : "none",
        gridTemplateColumns: "repeat(3, 280px)",
        gridTemplateRows: "repeat(2, 380px)",
        gap: "10px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-10%, -50%)",
        zIndex: 10,
    };

    const closeButtonStyle = {
        position: "absolute",
        top: "-60px",
        right: "-60px",
        cursor: "pointer",
        zIndex: 11,
    };

    const images = [Projet1Image, Projet2Image, Projet3Image, Projet4Image, Projet5Image, Projet6Image];

    const infoStyle = {
        position: "absolute",
        transform: "translate(-225%, -90%)",
        width: "300px",
        padding: "10px",
        fontSize: "15px",
        color: "#323232",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        display: hoveredProject ? "block" : "none",
        zIndex: 20
    };

    return (
        <div>
            <div style={boxStyle} onClick={toggleCollapse}>
                <p style={textstyle}>{text}</p>
                <p style={soustextstyle}>{soustexte}</p>
            </div>

            <div style={overlayStyle} onClick={handleClose}></div>

            {isCollapsed && (
                <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                    {hoveredProject && (
                        <div classname="description-projet" style={infoStyle}>
                            <p><strong></strong> {hoveredProject.problem}</p>
                            <p><strong></strong> {hoveredProject.skills}</p>
                        </div>
                    )}

                    <div style={collapseContainerStyle}>
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
                                onMouseLeave={() => setHoveredProject(null)}
                            />
                        ))}
                        <div style={closeButtonStyle} onClick={handleClose}>
                            <FontAwesomeIcon icon={faX} size="2x" style={{ color: "white" }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Boxmodale;
