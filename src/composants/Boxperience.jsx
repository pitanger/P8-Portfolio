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

function Boxperience({ text, soustexte, Icone, isWhiteText = false }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const appliedSoustextStyle = isWhiteText ? soustextstyleWhite : soustextstyle;

    const boxStyle = {
        height: "hauteur",
        width: isExpanded ? "600px" : "200px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
        transition: "width 0.5s ease-in-out",
        overflow: "hidden",
    };

    const paragraphStyle = {
        fontSize: "10px",
        margin: "5px 0",
        textAlign: "center",
    };

    return (
        <div className="box boxperience" style={boxStyle} onClick={handleClick}>
            {Icone && <FontAwesomeIcon icon={Icone} size="3x" style={{ color: "white" }} />}
            <p className="box__text" style={textstyle}>{text}</p>
            <p className="box__soustexte" style={appliedSoustextStyle}>{soustexte}</p>
            {isExpanded && (
                <>
                    <p style={paragraphStyle}>Premier paragraphe</p>
                    <p style={paragraphStyle}>Deuxième paragraphe</p>
                </>
            )}
        </div>
    );
}

export default Boxperience;
