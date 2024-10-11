import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Box({ text, soustexte, largeur="auto", hauteur="150px", Couleurfond = "white", Couleurtexte = "#323232", Icone, Imagefond, isWhiteText = false, survol = false, textSurvol = "", soustextSurvol = "" }) {
    
    const textstyle = {
        fontSize: "1.35rem",
        transform: "scaleY(1.4)",
        color: Couleurtexte
    };
    
    const soustextstyle = {
        fontSize: "0.7rem",
        transform: "scaleY(1.4)",
        color: Couleurtexte
    };
    
    const soustextstyleWhite = {
        fontSize: "1rem",
        transform: "scaleY(1.4)",
        color: "white",
    };

    const [isHovered, setIsHovered] = useState(false);

    const appliedSoustextStyle = isWhiteText || isHovered ? soustextstyleWhite : soustextstyle;

    const boxStyle = {
        backgroundColor: isHovered ? "#323232" : Couleurfond,
        backgroundImage: Imagefond,
        display: "flex",
        width: largeur,
        height: hauteur
    };

    const handleMouseEnter = () => {
        if (survol) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (survol) {
            setIsHovered(false);
        }
    };

    const formatSoustext = (text) => {
        return text.split(/(?<=\d)\s+|,\s*/).map((item, index) => (
            <React.Fragment key={index}>
                {item}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div
            className="box"
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {Icone && <FontAwesomeIcon icon={Icone} size="3x" style={{ color: isHovered ? "white" : "white" }} className="icone-youtube" />}
            <p style={isHovered && textSurvol === "" ? { display: "none" } : isHovered ? { ...textstyle, color: "white" } : textstyle} >
                {isHovered ? textSurvol : text}
            </p>
            <p style={appliedSoustextStyle}> 
                {isHovered && soustextSurvol ? formatSoustext(soustextSurvol) : soustexte}
            </p>
        </div>
    );
}

export default Box;
