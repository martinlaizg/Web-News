import React, { Component } from 'react';

import Api_access from '../Api_access'

class Notice extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		new Api_access().getNotice().then(response => this.setState({notice: response}))
	}

	render() {
		return (
			<div>
				<h1>{this.state.notice.title}</h1>
				<p>{this.state.notice.description}</p>
			</div>
		);
	}
}

export default Notice;