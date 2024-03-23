import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import '../styles/Signup.css';
import { useDispatch, useSelector } from 'react-redux';
// import { authenticateAction } from '../redux/actions/authenticateAction';
import { handleAuthenticate } from '../redux/reducers/authenticateReducer';

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const authenticate = useSelector((state) => state.auth.authenticate);
	const modalElement = document.querySelector('body > div.modal');
	if (modalElement) {
		modalElement.style.display = 'none';
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(handleAuthenticate({ id, password }));
		navigate('/');
		console.log('signed up!');
	};
	return (
		<div>
			<Container className='signup-container'>
				<h2>Become a member</h2>
				<p>
					Become a Member — you'll enjoy exclusive deals, offers, invites and
					rewards.
				</p>
				<Form className='sign-up-form' onSubmit={(e) => handleSubmit(e)}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							onChange={(e) => {
								setId(e.target.value);
							}}
						/>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicText'>
						<Form.Label>UserName</Form.Label>
						<Form.Control
							type='text'
							placeholder='username'
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
						<Form.Text className='text-muted'>Set your username</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<Form.Text className='text-muted'>
							8 characters lowercase 1 uppercase 1 number
						</Form.Text>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check
							type='checkbox'
							label='Yes, email me my member rewards, special invites, trend alerts and more.
Your inbox is about to get a lot more stylish! Get excited for exclusive deals, trend alerts, first access to our new collections, and more. Plus, don not miss out on all your Member rewards, birthday offer and special invites to events!'
						/>
					</Form.Group>
					<div className='signup-btn-container'>
						<Button variant='danger' type='submit'>
							Become a member
						</Button>
						<Button variant='dark' type='submit'>
							Login
						</Button>
					</div>
				</Form>
			</Container>
		</div>
	);
};
export default Signup;
