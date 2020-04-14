import React, { Component } from 'react';
import Icone from './Icone'

export default class Presentation extends Component {
  render() {
    return (
        <section id="one" className="main style2">
            <div className="container">
                <div className="row gtr-150">
                    <div className="col-6 col-12-medium">
                    <Icone />
                    </div>
                    <div className="col-6 col-12-medium">
                        <header className="major">
                            <h2>À Propos de moi</h2>
                        </header>
                        <p>Je m'appelle Thomas Florent, j'ai 21 ans et je suis Junior Web Developer suite à la formation Becode. Ayant toujours été intéressé par l'informatique, j'ai découvert le métier de développeur en commençant un bachelier en informatique de gestion à la haute école qui n'a pas abouti suite à diverses raisons. Suite à cette expérience, j'ai décidé de me lancer pleinement dans le monde du développement.</p>
                        <p>Durant cette formation de 7 mois chez BeCode, j'ai appris divers langages de programmation qui m'ont permis de développer certaines de mes connaissances déjà acquises. Attiré par le Web Design, j'ai évidemment travaillé avec du HTML et du CSS, mais aussi Bootstrap et du javascript. De plus, j'ai découvert React et React Native, langages sur lesquels je souhaite me concentrer.</p>
                        <p>Suite à cette formation j'ai approndi mes connaissances en PHP, MySQL et Wordpress.</p>
                        <header className="major">
                            <h2>Soft Skills</h2>
                        </header>
                        <ul>
                            <li>Motivé</li>
                            <li>Esprit d'équipe</li>
                            <li>Persévérant</li>
                            <li>Flexible</li>
                            <li>Sociable</li>
                        </ul>

                        
                    </div>
            </div>
        </div>
    </section>
    );
  }
}