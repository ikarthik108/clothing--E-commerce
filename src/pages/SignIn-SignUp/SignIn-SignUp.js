import React from 'react';
import './SignIn-SignUp.scss'

import SignIn from '../../components/SignIn/SignIn.js'
import SignUp from '../../components/SignUp/SignUp.js'



const SignInAndSignUpPage= ()=> {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn/>
			<SignUp/>
		</div>
		)
}

export default SignInAndSignUpPage;