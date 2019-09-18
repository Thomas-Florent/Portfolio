import React, { Component } from 'react';
import TwitterFooter from './Twitter_footer';
import FacebookFooter from './Facebook_footer';
import InstagramFooter from './Instagram_footer';
import GithubFooter from './Github_footer';
import MailFooter from './Mail_footer';
import LinkedInFooter from './LinkedIn_footer'

export default class Footer extends Component {
  render() {
    return (
      <section id="footer">
				<ul className="icons">
					<TwitterFooter />
					<FacebookFooter />	
					<InstagramFooter />
					<GithubFooter />
					<MailFooter />
					<LinkedInFooter />
				</ul>
			</section>
    );
  }
}