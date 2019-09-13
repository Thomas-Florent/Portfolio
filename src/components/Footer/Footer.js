import React, { Component } from 'react';
import Twitter_footer from './Twitter_footer';
import Facebook_footer from './Facebook_footer';
import Instagram_footer from './Instagram_footer';
import Github_footer from './Github_footer';
import Mail_footer from './Mail_footer';
import LinkedIn_footer from './LinkedIn_footer'

export default class Footer extends Component {
  render() {
    return (
      <section id="footer">
				<ul class="icons">
					<Twitter_footer />
					<Facebook_footer />	
					<Instagram_footer />
					<Github_footer />
					<Mail_footer />
					<LinkedIn_footer />
				</ul>
			</section>
    );
  }
}