import React, { Component } from 'react';

import Api_access from '../Api_access'

class Notice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notice: {
				author: {
					name: null
				},
				category: null,
				comments: [],
				description: null,
				keywords: null,
				publishdate: null,
				title: null,
				views: null,

			}
		}
	}

	componentDidMount() {
		new Api_access().getNotice(this.props.id).then(response => this.setState({notice: response.notice}))
	}

	render() {
		return (
			<div className='col-lg-10 offset-lg-1'>
				<h2>{this.state.notice.title}</h2>
				<br/>
				<span className='badge badge-secondary'>{}</span>
				<p className='notice-text'>{this.state.notice.description}</p>
				<small>Author: {this.state.notice.author.name}   ({this.state.notice.author.username})</small>
				<br/>
				<span className="badge badge-info">{this.state.notice.views} visitas</span>

			</div>
		);
	}
}

export default Notice;