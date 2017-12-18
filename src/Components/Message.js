import React, { Component } from 'react';

class Message extends Component {
	render() {
		return (
			<div class="alert alert-danger alert-dismissable">
				<a href="" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				{this.props.message}
		  </div>
		);
	}
}

export default Message;