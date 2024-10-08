import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CompDate from "./date";

function Nav() {
    const [isHovered, setIsHovered] = useState(false);

    const handleCmsClick = () => {
        alert("Et non ! Ce site est entièrement créé en React !");
    };

    return (
        <nav className="nav">
            <div className="nav__main">
                <Link to="/">
                    <div className="nav__main--home">
                        <FontAwesomeIcon icon={faHouse} className="nav__icon nav__icon--home" />
                    </div>
                </Link>
                <div
                    className="nav__main--cms"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleCmsClick}
                >
                    {isHovered && <span className="nav__tooltip">Ce site a-t'il été créé avec un CMS ?</span>}
                    <FontAwesomeIcon icon={faQuestion} className="nav__icon nav__icon--cms" />
                </div>
                <div className="nav__main--contact">
                    <a href="mailto:mathieu.krause@hotmail.com"><FontAwesomeIcon icon={faEnvelope} className="nav__icon nav__icon--contact" /></a>
                </div>
            </div>
            <div className="nav__date">
                <CompDate />
            </div>
        </nav>
    );
}

export default Nav;
