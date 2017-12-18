import React, { Component } from 'react';

import Api_access from './Components/Api_access'
import Message from './Components/Message'

import Header from './Components/Header/Header'
import Container from './Components/Container'
import Signup from './Components/User/Signup'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			logged: (localStorage.token !== 'null'),
			path: 'notices',
			error: null
		}
	}

	componentDidMount() {
		this.loadCategories()
	}

	changePath = (path) => {
		this.setState({ path: path })
	}

	login = (username, password) => {
		new Api_access().login({ username, password }).then(response => {
			if (response.token) {
				localStorage.token = response.token
				localStorage.username = username
				this.setState({
					logged: (response.token !== 'null')
				})
			}
			else if (response.message === 'Invalid credentials') {
				this.setState({ error: 'Credenciales incorrectas' })
			}
			else {
				this.setState({ error: 'Error de conexión con API' })
			}
		})
	}

	logout = () => {
		localStorage.token = null
		this.setState({
			logged: (localStorage.token !== 'null')
		})
	}

	signup = (name, username, password) => {
		new Api_access().signup({ name, username, password }).then(response => {
			if (response.username) {
				this.setState({ path: ' ' })
			}
			else if (response.message.startsWith('User')) {
				localStorage.token = null
				this.setState({ error: response.message, path: 'signup' })
			}
			else {
				localStorage.token = null
				this.setState({ error: 'Error de conexión con API', path: 'signup' })
			}
		})
	}

	loadCategories = () => {
		new Api_access().getCategories().then((response) => {
			this.setState({ categories: response.categories })
		})
	}

	newCategoryHandler = (category) => {
		new Api_access().createCategory(category).then(response => {
			if (response.category) {
				var categories = this.state.categories
				categories.push(response.category)
				this.setState({ categories: categories })
			}
			else {
				this.setState({ error: 'Error de conexión con API' })
			}
		})
	}

	deleteCategoryHandler = (categoryId) => {
		new Api_access().deleteCategory(categoryId)
		var categories = this.state.categories.filter((element) => { return element._id !== categoryId })
		this.setState({ categories })
	}

	setError = (error) => {
		this.setState({
			error: error
		})
	}

	render() {
		var content = <Container path={this.state.path} categories={this.state.categories}
			changePath={this.changePath} setError={this.setError}/>
		if (this.state.path === 'signup' && localStorage.token === 'null') {
			content = <Signup signup={this.signup} />
		}
		return (
			<div className='container'>
				<Header loginHandler={this.login} newCategory={this.newCategoryHandler}
					categories={this.state.categories} logoutHandler={this.logout}
					deleteCategory={this.deleteCategoryHandler} changePath={this.changePath} />
				{this.state.error !== null ? <Message message={this.state.error} /> : null}
				<br />
				{content}
			</div>
		);
	}
}

export default App;