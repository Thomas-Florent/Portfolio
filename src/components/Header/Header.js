import React, { Component } from 'react';
import ScrollButton from './ScrollButton'

export default class Header extends Component {
  render() {
    return (
      <section id="header" style={{marginTop: '0px'}}>
				<div className="inner">
					<span className="icon solid major fa-code"></span>
					<h1>Bonjour, je suis <strong>Thomas Florent</strong>. <br></br>Je suis Junior Web Developer<br></br></h1>
					<p>Si vous souhaitez en savoir plus sur moi, n'hésitez pas à visiter cette page.</p>
					<ScrollButton />
				</div>
			</section>
    );
  }
}

