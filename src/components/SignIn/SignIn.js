import React from 'react';

import './SignIn.scss'

import FormInput from '../FormInput/FormInput.js'

import CustomButton from '../CustomButton/CustomButton.js'

import {signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			email: "",
			password: ""
		}
	}
	handleSubmit=(event)=> {
		event.preventDefault();
		this.setState (
					{
						email:"",
						password:""
					}
					  )
	}

	HandleChange=(event)=> {
		const {name,value}=event.target;
		this.setState({[name]:value})
		console.log(this.state)
		}
	

	render () {
		return (
				<div className='sign-in'>
					<h2 className='title'>I Aldready Have An Account</h2>
					<span>Sign In With Your Email and Password</span>
					<form onSubmit={this.handleSubmit}>	
						<FormInput name='email' type='email' 
						label='Email' value={this.state.email} HandleChange={this.HandleChange} required/>	
						<FormInput name='password' type='password' 
						label='Password' value={this.state.password} HandleChange={this.HandleChange} required/>
						<div className='buttons'>
							<CustomButton type='submit'> Sign In </CustomButton>
							<CustomButton isGoogleSignIn onClick={signInWithGoogle}> {' '}Sign in With Google {' '} </CustomButton>
						</div>	
					</form>
				</div>
			)
	}
}


export default SignIn;