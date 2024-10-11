import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const textstyle = {
    fontSize: "1.35rem",
    transform: "scaleY(1.4)",
    color: "#323232"
};

const soustextstyle = {
    fontSize: "0.7rem",
    transform: "scaleY(1.4)",
    color: "#323232"
};

const soustextstyleWhite = {
    fontSize: "0.7rem",
    transform: "scaleY(1.4)",
    color: "white"
};

function Boxperience({ text, soustexte, Icone, isWhiteText = false, largeurNonExpanded = 200 }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleMediaQueryChange = (e) => {
            setIsSmallScreen(e.matches);
        };
        
        handleMediaQueryChange(mediaQuery);

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const appliedSoustextStyle = isWhiteText ? soustextstyleWhite : soustextstyle;

    const boxStyle = {
        height: "150px",
        width: isSmallScreen
            ? isExpanded ? "92%" : "50%"
            : isExpanded 
                ? `${largeurNonExpanded * 1.86}px`
                : `${largeurNonExpanded}px`,
        margin: "3px",
        backgroundColor: "white",
        cursor: "pointer",
        transition: "width 0.5s ease-in-out",
    };

    const paragraphStyle = {
        fontSize: "0.75rem",
    };

    return (
        <div className="box" id="experience" style={boxStyle} onClick={handleClick}>
            {Icone && <FontAwesomeIcon icon={Icone} size="3x" style={{ color: "white" }} />}
            {!isExpanded && (
                <>
                    <p className="box__text" style={textstyle}>{text}</p>
                    <p className="box__soustexte" style={appliedSoustextStyle}>{soustexte}</p>
                </>
            )}
            {isExpanded && (
                <>
                    <p style={paragraphStyle}>- Enseignant d'anglais en école privé (3 ans)</p>
                    <p style={paragraphStyle}>- Traducteur / Relecteur pour ROBOTO Global (2 ans)</p>
                    <p style={paragraphStyle}>- Optimisation de la SEO pour 3 sites différents (6 mois)</p>
                </>
            )}
        </div>
    );
}

export default Boxperience;
