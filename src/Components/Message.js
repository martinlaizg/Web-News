import React, { Component } from 'react';

class Message extends Component {
	render() {
		return (
			<div className="alert alert-danger" role="alert">
				{this.props.title}
			</div>
		);
	}
}

export default Message;