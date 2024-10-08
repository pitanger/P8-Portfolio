import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const textstyle = {
    fontSize: "30px",
    transform: "scaleY(1.4)",
    color: "#323232"
};

const soustextstyle = {
    fontSize: "15px",
    transform: "scaleY(1.4)",
    color: "#323232"
};

const soustextstyleWhite = {
    fontSize: "15px",
    transform: "scaleY(1.4)",
    color: "white"
};

function Box({ text, soustexte, hauteur = "auto", largeur = "auto", Couleurfond = "white", Icone, Imagefond, isWhiteText = false, survol = false, textSurvol = "", soustextSurvol = "" }) {
    
    const [isHovered, setIsHovered] = useState(false);

    const appliedSoustextStyle = isWhiteText || isHovered ? soustextstyleWhite : soustextstyle;

    const boxStyle = {
        height: hauteur,
        width: largeur,
        backgroundColor: isHovered ? "#323232" : Couleurfond,
        backgroundImage: Imagefond,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        transition: "background-color 0.3s ease, color 0.3s ease",
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
        return text.split(/(?<=\d)\s+/).map((item, index) => (
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
            {Icone && <FontAwesomeIcon icon={Icone} size="3x" style={{ color: isHovered ? "white" : "white" }} />}
            <p style={isHovered ? { ...textstyle, color: "white" } : textstyle}>
                {isHovered && textSurvol ? textSurvol : text}
            </p>
            <p style={appliedSoustextStyle}>
                {isHovered && soustextSurvol ? formatSoustext(soustextSurvol) : soustexte}
            </p>
        </div>
    );
}

export default Box;
