import React, { Component } from 'react';

class Header extends Component {

	render() {
		var categoriesList = null
		if (this.props.categories === []) {
			categoriesList = <div className='dropdown-item'>
				No categories
				</div>
		}
		else if (this.props.categories) {
			categoriesList = this.props.categories.map((category, index) => {
				return <div className='dropdown-item' key={index}>
					<a className='category-item'>{category.name}</a>
					{localStorage.token !== 'null' ?
						<button className='btn btn-danger' onClick={() => { this.props.deleteCategory(category._id) }}><img src="/svg/trashcan.svg" alt="Delete" /></button>
						: null}
				</div>
			})
		}

		return (
			<div>
				<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand text-white">Web-News</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className='nav-link' onClick={() => this.props.changePath('')} >Notices</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">

									{categoriesList}

									{localStorage.token !== 'null' ?
										<div className="input-group dropdown-input">
											<input ref={campo => this.newCategoryCampo = campo} type="text" className="form-control" placeholder="New Category" aria-label="New Category" />
											<span className="input-group-btn">
												<button className="btn btn-secondary" type="button" onClick={() => { this.props.newCategory(this.newCategoryCampo.value) }}><img src="/svg/plus.svg" alt="Add" /></button>
											</span>
										</div>
										: null
									}

								</div>
							</li>
						</ul>
						{localStorage.token !== 'null' ?
							<li className="nav-item">
								<button className='btn btn-danger' onClick={this.props.logoutHandler}>Logout</button>
							</li>
							:
							<div className='row'>
								<li className="nav-item dropdown form-inline">
									<a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Login
        							</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<input ref={campo => this.usernameLogin = campo} className="dropdown-item form-control form-control-sm" type="text" placeholder="Username" />
										<input ref={campo => this.passwordLogin = campo} className="dropdown-item form-control form-control-sm" type="password" placeholder="Password..." />
										<button className="btn btn-primary btn-block" onClick={() => this.props.loginHandler(this.usernameLogin.value, this.passwordLogin.value)}>Search</button>
									</div>
								</li>
								<li className='nav-item form-inline'>
									<a className='nav-link text-white' onClick={() => this.props.changePath('signup')}>Sign Up</a>
								</li>
							</div>
						}
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;