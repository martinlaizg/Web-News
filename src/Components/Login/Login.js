import React, { Component } from 'react'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			loginCorrecto: true
		}
	}

	login = (user) => {
		this.setState({
			username: this.usernameCampo.value,
			password: this.passwordCampo.value
		})
		let data = JSON.stringify({
			username: this.usernameCampo.value,
			password: this.passwordCampo.value
		})
		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-type':'application/json'
			},
			body: data
		})
		.then((response) => {
			return response.json()
		})
		.then((response) => {
			console.log(response)
			if(response.token) {
				localStorage.setItem('token', response.token)
				localStorage.setItem('username', this.state.username)
				localStorage.setItem('password', this.state.password)
				this.setState({
					loginCorrecto: true
				})
			}
			else {
				this.setState({
					loginCorrecto: false
				})
			}
		})
	}

	render() {
		return (
			<div>
				<h1>Log in</h1>
				<input type="text" placeholder="Username"
					ref={(campo) => { this.usernameCampo = campo }}/> <br/>
				<input type="text" placeholder="Password"
					ref={(campo) => { this.passwordCampo = campo }}/> <br/>
				<button className='.btn' onClick={this.login}>Enviar</button>
				{this.state.loginCorrecto ? null :
					<div>
						<strong>Login incorrecto</strong>
					</div>
				}
				<label htmlFor="token">{localStorage.token}</label>
			</div>
		)
	}
}

export default Login