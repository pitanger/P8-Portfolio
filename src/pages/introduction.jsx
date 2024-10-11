import React from 'react';
import Nav from '../composants/nav';
import Background from '../composants/background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Introduction = () => {
    return (
        <div className="traduction">
            <Background />
            <header>
                <Nav />
            </header>
            <div className='descri-intro'>Moi c'est Mathieu, un passioné d'informatique et de langues. Ex-enseignant et traducteur, j'ai décidé de me reconvertir dans le dev web grâce à OpenClassrooms et je me suis formé en 4 mois aux outils de développement et d'optimisation SEO nécessaires.</div>
            <main className="mainintro">
                <div className='conten1'>
                    <div className='boiteintro jeuxvideos'>
                        <div className="header">
                            Jeux Vidéos
                            <span className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="content">
                            <ul>Roguelike
                                <li>Slay the Spire</li>
                                <li>Hades</li>
                                <li>Darkest Dungeon</li>
                                <li>Shogun Showdown</li>
                            </ul>
                            <ul>Soulslike
                                <li>Elden Ring</li>
                                <li>Lies of P</li>
                                <li>Black Myth: Wukong</li>
                                <li>The Surge</li>
                            </ul>
                        </div>
                    </div>
                    <div className='boiteintro mangas'>
                        <div className="header">
                            Mangas
                            <span className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="content">
                            <ul>Shonens
                                <li>Zatch Bell</li>
                                <li>One Punch Man</li>
                                <li>Mashle</li>
                                <li>Dr. Stone</li>
                            </ul>
                            <ul>Autres
                                <li>Kingdom</li>
                                <li>Berserk</li>
                                <li>Vinland Saga</li>
                                <li>Vagabond</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='conten2'>
                    <div className='boiteintro musiques'>
                        <div className="header">
                            Musiques
                            <span className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="content">
                            <ul>Drum & Bass
                                <li>Voicians</li>
                                <li>Lexurus</li>
                                <li>Andromedik</li>
                                <li>Pendulum</li>
                            </ul>
                            <ul>Autres
                                <li>Gorillaz</li>
                                <li>Toby Fox</li>
                                <li>Daft Punk</li>
                                <li>Eiffel 65</li>
                            </ul>
                        </div>
                    </div>
                    <div className='boiteintro hobbies'>
                        <div className="header">
                            Hobbies
                            <span className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Lecture (mangas, fanfics)</li>
                                <li>Ecriture</li>
                                <li>Marche à pieds</li>
                                <li>Dessin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Introduction;
