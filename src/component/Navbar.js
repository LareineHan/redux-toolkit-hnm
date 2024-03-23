import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { authenticateAction } from '../redux/actions/authenticateAction';
import { handleAuthenticate } from '../redux/reducers/authenticateReducer';
import { handleFalseAuthenticate } from '../redux/reducers/authenticateReducer';
const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authenticate = useSelector((state) => state.auth.authenticate); // 여기서 auth는 스토어에 있는 슬라이스 이름이다.
	const [show, setShow] = useState(false);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const menuList = [
		'Women',
		'Men',
		'Kids',
		'Home',
		'Sale',
		'Magazine',
		'About',
		'Contact',
	];

	const searchItem = async (e) => {
		if (e.key === 'Enter') {
			let keyword = e.target.value;
			navigate(`?q=${keyword}`);
		} else {
			console.log('no keyword yet!');
		}
	};

	const linkToHome = () => {
		navigate('/');
	};
	const goSignup = () => {
		setShow(false);
		const modalElement = document.querySelector('body > div.modal');
		if (modalElement) {
			modalElement.style.display = 'none';
		}
		navigate('/signup');
	};

	const handleClose = () => {
		setShow(false);
		document.body.classList.remove('modal-open');
		document.body.style.paddingRight = '0';
		const modalBackdrop = document.querySelector('.modal-backdrop');
		if (modalBackdrop) {
			modalBackdrop.style.display = 'none';
		}
		const modalElement = document.querySelector('body > div.modal');
		if (modalElement) {
			modalElement.style.display = 'none';
		}
	};

	const handleShow = () => {
		setShow(true);
		const modalElement = document.querySelector('body > div.modal');
		if (modalElement) {
			modalElement.style.display = 'block';
		}
	};

	const handleLogin = () => {
		dispatch(handleAuthenticate({ id, password }));
		setShow(false);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		navigate('/');
		dispatch(handleFalseAuthenticate());
	};

	return (
		<Container>
			<Row className='toggle-area'>
				<button
					className='nav-toggle'
					onClick={() => setHamburgerOpen((prev) => !prev)}>
					{hamburgerOpen ? (
						<FontAwesomeIcon icon={faCircleXmark} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</button>
			</Row>
			<Row className='logo-section'>
				<div onClick={linkToHome}>
					{' '}
					<img
						className='logo'
						width={70}
						src={require('../image/h&mlogo.png')}
						alt='logo'
					/>
				</div>
			</Row>

			<Col className='menu-container nav-bar'>
				<ul className={`menu-list${hamburgerOpen ? '-mobile-menu' : ''}`}>
					{hamburgerOpen && (
						<div
							className='mobile-close'
							onClick={() => setHamburgerOpen(false)}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</div>
					)}
					<div className='Log-btn'>
						{authenticate === false ? ( // isLogin이 false일 때만 실행
							<div>
								<div variant='light' className='login-btn' onClick={handleShow}>
									<FontAwesomeIcon icon={faUser} />
									<div className='login-text'>Login</div>
								</div>
								<Modal show={show} onHide={handleClose} keyboard={true}>
									<Modal.Header closeButton>
										<Modal.Title>Log in</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form>
											<Form.Group
												className='mb-3'
												controlId='exampleForm.ControlInput1'>
												<Form.Label>Email address</Form.Label>
												<Form.Control
													type='email'
													placeholder='name@example.com'
													autoFocus
													onChange={(e) => {
														setId(e.target.value);
													}}
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='exampleForm.ControlTextarea1'>
												<Form.Label>Password</Form.Label>
												<Form.Control
													type='password'
													placeholder='password'
													autoFocus
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicCheckbox'>
												<Form.Check type='checkbox' label='Remember me' />
											</Form.Group>
										</Form>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='light' onClick={goSignup}>
											Signup
										</Button>
										<Button variant='dark' type='submit' onClick={handleLogin}>
											Login
										</Button>
									</Modal.Footer>
								</Modal>
							</div>
						) : (
							// authenticate true일 때만 실행
							<Form className='logout-btn' onSubmit={(e) => handleLogout(e)}>
								<FontAwesomeIcon icon={faUser} />
								<button className='logout-text' type='submit'>
									Logout
								</button>
							</Form>
						)}
					</div>
					<div className='menu'>
						{menuList.map((menu) => (
							<li key={menu}>{menu}</li>
						))}
					</div>
					<div className='search-bar'>
						<FontAwesomeIcon icon={faSearch} />
						<input
							id='search_input'
							type='text'
							placeholder='Search'
							onKeyDown={(e) => searchItem(e)}
						/>
					</div>
				</ul>
			</Col>
		</Container>
	);
};

export default Navbar;
