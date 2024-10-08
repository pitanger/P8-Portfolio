import React, { useState } from 'react';

function Singleboxmodale({ title, description, imagepath, githublink, animationClass, index, couleur, onHover, onMouseLeave }) {
    const [isHovered, setIsHovered] = useState(false);

    const boxStyle = {
        width: "280px",
        height: "380px",
        position: "relative",
        cursor: "pointer",
        transition: "opacity 0.5s ease",
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 0 5px black",
    };

    const upperBoxStyle = {
        height: "80%",
        backgroundImage: `url(${imagepath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const lowerBoxStyle = {
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#323232",
    };

    const paragraphStyle = {
        margin: "0",
        color: couleur,
        textShadow: "3px 3px 10px black",
        fontSize: "25px",
        textAlign: "center",
        transition: "opacity 0.5s ease",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: isHovered ? 1 : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "opacity 0.5s ease",
        fontSize: "25px",
        color: "white",
    };

    return (
        <div
            className={`singleboxmodale ${animationClass}`}
            style={{ ...boxStyle, transitionDelay: `${index * 0.1}s`, opacity: animationClass === "fade-in" ? 1 : 0 }}
            onMouseEnter={() => { setIsHovered(true); onHover(); }}
            onMouseLeave={() => { setIsHovered(false); onMouseLeave(); }}
            onClick={() => window.open(githublink, "_blank")}
        >
            <div style={upperBoxStyle}></div>

            <div style={lowerBoxStyle}>
                <p className="title" style={paragraphStyle}>{title}</p>
            </div>

            <div className="overlay" style={overlayStyle}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Singleboxmodale;
