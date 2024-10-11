import React from "react";

function Reseaux({ imageSrc, altText }) {
    return (
        <img className="Boximage" src={imageSrc} alt={altText} />
    );
}

export default Reseaux;