import React, { Component } from 'react';

export default class MainThree extends Component {
  render() {
    return (
      <section id="three" class="main style1 special">
				<div class="container">
					<header class="major">
						<h2>Portfolio</h2>
					</header> 
					<p>Voici quelques réalisations personnelles :</p>
					<div class="row gtr-150">
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="img/resto.png" alt=""></img></span>
							<h3>Projet restaurant en Bootstrap</h3>
							<p>Il s'agit d'un projet de restaurant fictif réalisé en Bootstrap.</p>
							<ul class="actions special">
								<li><a href="https://thomas-florent.github.io/restaurant-css-framework/index.html" target="_blank"  class="button">Lien du projet</a></li>
							</ul>
						</div>
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="img/hart.png" alt=""></img></span>
							<h3>Fondation du don cardiaque</h3>
							<p>Redisign du site pour la fondation cardiaque à Bruxelles.</p>
							<ul class="actions special">
								<li><a href="https://thomas-florent.github.io/fonds-/" target="_blank" class="button">Lien du projet</a></li>
							</ul>
						</div>
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="img/404.png" alt=""></img></span>
							<h3>Page 404</h3>
							<p>Une petite page 404 réalisé en HTML et CSS lors du début de Becode.</p>
							<ul class="actions special">
								<li><a href="https://thomas-florent.github.io/404-page/" target="_blank" class="button">Lien du projet</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
    );
  }
} 