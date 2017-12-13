import React, { Component } from 'react';

import Api_access from '../Api_access'

class Singup extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	signup = () => {
		var user = {
			name: this.nameLogin.value,
			username: this.usernameLogin.value,
			password: this.passwordLogin.value
		}
		new Api_access().signup(user).then(response => console.log(response))
	}

	render() {
		return (
			<div>
				<h1>Sign up</h1>
				<form className='card' onSubmit={this.signup}>
				<br/>
					<div className='col-lg-6 col-xl-5'>
						<div className='form-group'>
							<label>Full name</label>
							<input ref={campo => this.nameLogin = campo} type='text' className='form-control' placeholder='Full name...' required />
						</div>
						<div className='form-group'>
							<label>Username</label>
							<input ref={campo => this.usernameLogin = campo} type='text' className='form-control' placeholder='Username...' required />
						</div>
						<div className='form-group'>
							<label>Password</label>
							<input ref={campo => this.passwordLogin = campo} type='password' className='form-control' placeholder='Password' required />
						</div>
						<button className='btn btn-primary' type='submit'>Sign Up</button>
					</div>
					<br/>
				</form>
			</div>
		);
	}
}

export default Singup;