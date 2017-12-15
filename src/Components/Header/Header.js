import React, { Component } from 'react';

class Header extends Component {

	render() {
		var categoriesList = null
		if (this.props.categories.length === 0) {
			categoriesList = <div className='alert alert-danger' role='alert'>
				No hay categorias
				</div>
		}
		else if (this.props.categories) {
			categoriesList = this.props.categories.map((category, index) => {
				return <div className='dropdown-item' key={index}>
					{localStorage.token !== 'null' ?
						<button className='btn btn-danger' onClick={() => { this.props.deleteCategory(category._id) }}><img src='/svg/trashcan.svg' alt='Delete' /></button>
						: null}
						<a className='category-item'>  {category.name}</a>
				</div>
			})
		}

		return (<nav className='navbar navbar-expand-lg navbar-light bg-dark'>
			<a className='navbar-brand text-white' >Web-News</a>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<a className='nav-link  text-white' onClick={() => this.props.changePath('notices')}>Notices</a>
					</li>
					<li className='nav-item dropdown'>
						<a className='nav-link dropdown-toggle text-white' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Categories</a>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>

							{categoriesList}

							{localStorage.token !== 'null' ?
								<div className='input-group dropdown-input'>
									<input ref={campo => this.newCategoryCampo = campo} type='text' className='form-control' placeholder='New Category' aria-label='New Category' />
									<span className='input-group-btn'>
										<button className='btn btn-secondary' type='button' onClick={() => { this.props.newCategory(this.newCategoryCampo.value) }}><img src='/svg/plus.svg' alt='Add' /></button>
									</span>
								</div>
								: null
							}

						</div>
					</li>
					{localStorage.token !== 'null' ?
						<li className='nav-item'>
							<a className='nav-link  text-white' onClick={() => this.props.changePath('newNotice')}>Add notice</a>
						</li> : null
					}
				</ul>
				<div className='my-2 my-lg-0'>
					{localStorage.token !== 'null' ?
						<li className='nav-item'>
							<button className='btn btn-danger' onClick={this.props.logoutHandler}>Logout</button>
						</li>
						:
						<div className='row'>
							<li className='nav-item dropdown form-inline'>
								<a className='nav-link dropdown-toggle text-white' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
									Login
								</a>
								<div className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdown'>
									<input ref={campo => this.usernameLogin = campo} className='dropdown-item form-control form-control-sm' type='text' placeholder='Username' />
									<input ref={campo => this.passwordLogin = campo} className='dropdown-item form-control form-control-sm' type='password' placeholder='Password...' />
									<button className='btn btn-primary btn-block' onClick={() => this.props.loginHandler(this.usernameLogin.value, this.passwordLogin.value)}>Log in</button>
								</div>
							</li>
							<li className='nav-item form-inline'>
								<a className='nav-link text-white' onClick={() => this.props.changePath('signup')}>Sign Up</a>
							</li>
						</div>
					}
				</div>
			</div>
		</nav>);
	}
}

export default Header;