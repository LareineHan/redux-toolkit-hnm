import React from 'react';
import '../styles/Footer.css';
import logo from '../image/h&mlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
const shopMenu = [
	'Women',
	'Men',
	'Baby',
	'Kids',
	'H&M HOME',
	'Beauty',
	'Student Discount',
	'Sport',
	'Gift cards',
	'Magazine',
];
const corporateInfo = [
	'Career at H&M',
	'About H&M group',
	'Sustainability H&M Group',
	'Press',
	'Investor Relations',
	'Corporate Governance',
];
const help = [
	'Customer Service',
	'My Account',
	'Find a Store',
	'Legal & Privacy',
	'Contact',
	'Gift Card Terms and Conditions',
	'CA Supply Chains Act',
	'Do Not Sell Or Share My Personal Data',
	'Our Commitment to Accessibility',
	'Report a scam',
	'Cookie Notice',
	'Cookie Setting',
];
const Footer = () => {
	return (
		<div className='footer-container'>
			<Container>
				<Row className='footer1-menu'>
					<Col sm={3} className='shop'>
						<p className='footer-h7'>SHOP</p>
						<Row>
							{shopMenu.map((item, index) => (
								<ul key={`shop_${index}`}>
									<li>{item}</li>
								</ul>
							))}
						</Row>
					</Col>
					<Col sm={3} className='corp'>
						<p className='footer-h7'>CORPORATE INFO</p>
						<Row>
							{corporateInfo.map((item, index) => (
								<ul key={`corporate_${index}`}>
									<li>{item}</li>
								</ul>
							))}
						</Row>
					</Col>
					<Col sm={3}>
						<p className='footer-h7'>HELP</p>
						<Row>
							{help.map((item, index) => (
								<ul key={`help_${index}`}>
									<li>{item}</li>
								</ul>
							))}
						</Row>
					</Col>
					<Col sm={3}>
						<p className='footer-h7'>Become a member</p>

						<p className='join-text'>
							Join now and get 10% off your next purchase!
						</p>
						<h6 className='read-more'>
							READ MORE <FontAwesomeIcon icon={faArrowRight} />
						</h6>
					</Col>
				</Row>
				<Row className='footer2-menu'>
					<Col className='social-icons'>
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faTiktok} />
						<FontAwesomeIcon icon={faYoutube} />
						<FontAwesomeIcon icon={faPinterest} />
						<FontAwesomeIcon icon={faFacebook} />
					</Col>
					<Row>
						<p className='footer-message'>
							The content of this site is copyright-protected and is the
							property of H&M Hennes & Mauritz AB. H&M is committed to
							accessibility. That commitment means H&M embraces WCAG guidelines
							and supports assistive technologies such as screen readers. If you
							are using a screen reader, magnifier, or other assistive
							technologies and are experiencing difficulties using this website,
							please call our TOLL-FREE support line (855-466-7467) for
							assistance.
						</p>
					</Row>
					<Row>
						<img src={logo} alt='logo-footer'></img>
					</Row>
					<Row>
						<h6>United States | $</h6>
					</Row>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
