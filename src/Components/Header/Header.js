import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Api_access from '../Api_access'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		this.refreshCategories()
	}

	refreshCategories = () => {
		new Api_access().getCategories().then(response => this.setState({categories: response.categories}))
	}

	addCategory = () => {
		new Api_access().createCategory(this.newCategory.value)
		this.refreshCategories()
		
	}

	render() {
		return (
			<div>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<NavLink className='nav-link' exact to='/'>Notices</NavLink>
					</li>
					<li className='nav-item dropdown'>
						<a className='nav-link dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown</a>
						<div className='dropdown-menu'>
							{
								this.state.categories.map((category, index) => {
									return <a className='dropdown-item' key={index}>{category.name}</a>
								})
							}
							<div className='dropdown-divider'></div>
							<div className='dropdown-item'>
								<div className="input-group">
									<input ref={campo => this.newCategory = campo} type="text" className="form-control" placeholder="Add category..." aria-label="Add category..." />
									<span className="input-group-btn">
										<button className="btn btn-secondary" type="button" onClick={this.addCategory}>Go!</button>
									</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<button onClick={this.refreshCategories}>Recargar categorias</button>
			</div>
		);
	}
}

export default Header;