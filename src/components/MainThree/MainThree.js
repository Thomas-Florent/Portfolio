import React, { Component } from 'react';

export default class MainThree extends Component {
  render() {
    return (
      <section id="three" className="main style1 special">
				<div className="container">
					<header className="major">
						<h2>Portfolio</h2>
					</header> 
					<p>Voici quelques réalisations personnelles :</p>
					<div className="row gtr-150">
						<div className="col-4 col-12-medium">
							<img src="img/resto.PNG" alt="resto"></img>
							<h3>Projet restaurant en Bootstrap</h3>
							<p>Il s'agit d'un projet de restaurant fictif réalisé en Bootstrap.</p>
							<ul className="actions special">
								<li><a href="https://thomas-florent.github.io/restaurant-css-framework/index.html" rel="noopener noreferrer" target="_blank"  className="button">Lien du projet</a></li>
							</ul>
						</div>
						<div className="col-4 col-12-medium">
							<img src="./img/hart.png" alt="hart"></img>
							<h3>Fondation du don cardiaque</h3>
							<p>Redisign du site pour la fondation cardiaque à Bruxelles.</p>
							<ul className="actions special">
								<li><a href="https://thomas-florent.github.io/fonds-/" target="_blank" rel="noopener noreferrer" className="button">Lien du projet</a></li>
							</ul>
						</div>
						<div className="col-4 col-12-medium">
							<img src="./img/404.png" alt="404"></img>
							<h3>Page 404</h3>
							<p>Une petite page 404 réalisé en HTML et CSS lors du début de Becode.</p>
							<ul className="actions special">
								<li><a href="https://thomas-florent.github.io/404-page/" target="_blank" rel="noopener noreferrer" className="button">Lien du projet</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
    );
  }
} 