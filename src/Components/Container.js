import React, { Component } from 'react';

import Api_acces from './Api_access'
import Notice from './Notice/Notice'
import NoticeForm from './Notice/NoticeForm'

class Container extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notices: [],
			path: null
		}
	}

	componentDidMount() {
		this.loadNotices()
	}

	loadNotices = () => {
		new Api_acces().getNotices().then(response => this.setState({ notices: response.notices }))
	}

	newNotice = (notice) => {
		new Api_acces().newNotice(notice).then(this.loadNotices())
	}

	render() {
		var elements = null
		if (this.props.path === 'newNotice') {
			elements = <NoticeForm newNotice={this.newNotice} categories={this.props.categories} />
		}
		else if (this.props.path === 'notices') {
			if (this.state.notices.length === 0) {
				elements = <div className="alert alert-danger" role="alert">
					No hay noticias
				</div>
			}
			else {
				elements = <div className='row justify-content-lg-center'>
					{this.state.notices.map((notice) => {
						return (<div className='card col-lg-5 mx-1 my-1' key={notice._id}>
							<div className='card-body'>
								<h4 className='card-title'><a onClick={() => { this.props.changePath('notice:' + notice._id) }}>{notice.title}</a></h4>
								<p className='card-text'>{notice.description}</p>
								<span className="badge badge-secondary">{notice.category ? notice.category.name : 'Sin categorizar'}</span>
							</div>
						</div>)
					})}
				</div>
			}
		}
		else if (this.props.path.startsWith('notice:')) {
			elements = <Notice id={this.props.path.split(':')[1]} />
		}

		return (
			<div>
				{elements}
			</div>
		);
	}
}

export default Container;