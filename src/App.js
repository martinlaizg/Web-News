import React, { Component } from 'react';

import Api_access from './Components/Api_access'

import Header from './Components/Header/Header'
import Container from './Components/Container'
import Signup from './Components/User/Signup'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			logged: (localStorage.token !== 'null'),
			path: null,
			error: null
		}
	}

	componentDidMount() {
		this.loadCategories()
	}

	changePath = (path) => {
		this.setState({path})
	}

	login = (username, password) => {
		new Api_access().login({ username, password }).then(response => {
			localStorage.token = response.token
			this.setState({
				logged: (response.token !== 'null')
			})
		})
	}

	logout = () => {
		localStorage.token = null
		this.setState({
			logged: (localStorage.token !== 'null')
		})
	}

	signup = (user) => {

	}

	loadCategories = () => {
		new Api_access().getCategories().then(response => this.setState({ categories: response.categories }))
	}

	newCategoryHandler = (category) => {
		new Api_access().createCategory(category).then(response => {
			var categories = this.state.categories
			categories.push(response.category)
			this.setState({ categories: categories })
		})
	}

	deleteCategoryHandler = (categoryId) => {
		new Api_access().deleteCategory(categoryId).then(response => console.log(response))
		var categories = this.state.categories.filter((element) => {return element._id !== categoryId})
		this.setState({categories})
	}

	render() {
		var content = <Container />
		if (this.state.path === 'signup' && localStorage.token === 'null') {
			content = <Signup signupHandler={this.signup} changePath={this.changePath}/>
		}
		return (
			<div className='container'>
				<Header loginHandler={this.login} newCategory={this.newCategoryHandler}
					categories={this.state.categories} logoutHandler={this.logout}
					deleteCategory={this.deleteCategoryHandler} changePath={this.changePath}/>
				<br />
				{content}
			</div>
		);
	}
}

export default App;