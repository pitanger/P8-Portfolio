import React from 'react';
import Nav from '../composants/nav';
import Background from '../composants/background';
import TradCollapse from '../composants/TradCollapse';

const Traduction = () => {
    return (
        <div className="traduction">
            <Background />
            <header>
                <Nav />
            </header>
            <main className='main-traduction'>
                <TradCollapse />
                <div className='descri-trad'>Car avant d'être développeur, j'étais traducteur pour l'entreprise polonaise <a class="lien-roboto" href="https://roboto.pl/" target='blank'>ROBOTO Global !</a> J'ai traduit divers contenus (vidéos, articles, organisations de tournois, analyses en jeu etc) pour l'entreprise RIOT Games et ses jeux vidéos Valorant et League of Legends pendant près de 2 ans, en plus de traduire et relire d'autres jeux vidéos. Vous trouverez sur cette page tout mon ancien portfolio !</div>
            </main>
        </div>
    );
}

export default Traduction;
