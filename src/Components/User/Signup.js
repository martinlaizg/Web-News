import React, { Component } from 'react';

class Singup extends Component {

	render() {
		return (
			<div>
				<h1>Sign up</h1>
				<form className='card' onSubmit={this.signup}>
					<br />
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
						<a className='btn btn-primary text-white' onClick={() => { this.props.signup(this.nameLogin.value, this.usernameLogin.value, this.passwordLogin.value) }}>Sign Up</a>
					</div>
					<br />
				</form>
			</div>
		);
	}
}

export default Singup;