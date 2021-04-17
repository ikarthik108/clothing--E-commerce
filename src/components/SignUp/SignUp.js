import React from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils.js';


class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			displayName:'',
			email:'',
			password:'',
			confirmPassword: ''
		}
	}
	handleSubmit=async event=> {
		event.preventDefault();

		const {displayName,email, password,confirmPassword}=this.state; 

		if (password!==confirmPassword) {
			alert("Passwords dont match");
			return;
		}

		try {
			const {user}= await auth.createUserWithEmailAndPassword(email,password);
			 await createUserProfileDocument(user,{displayName});
			 this.setState({
			 	displayName:'',
				email:'',
				password:'',
				confirmPassword: ''
			 })
		} catch(error) {
			console.error(error);

		}
	}

	handleChange=(event)=> {
		const {name,value}=event.target;

		this.setState({
			[name]:value
		});
	}

	render() {
		const {displayName,email, password,confirmPassword}=this.state;
		return (
			<div className='sign-up'>
				<h2>I do not have an account</h2>
				<span>Register with your Email and Password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput label='Display Name' type='text' 
					name='displayName' value={displayName} onChange={this.handleChange} required></FormInput>
					<FormInput label='Email' type='email' 
					name='email' value={email} onChange={this.handleChange} required></FormInput>
					<FormInput label='Password' type='password' 
					name='password' value={password} onChange={this.handleChange} required></FormInput>
					<FormInput label='Confirm Password' type='password' 
					name='confirmPassword' value={confirmPassword} onChange={this.handleChange} required></FormInput>
					<div>
						<CustomButton type='submit'> SIGN UP</CustomButton>
					</div>
					
				</form>
			</div>
			)
	}
}

export default SignUp;