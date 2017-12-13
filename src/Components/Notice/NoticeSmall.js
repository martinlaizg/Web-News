import React, { Component } from 'react';


class NoticeSmall extends Component {
	render() {
		var date = new Date(this.props.notice.publishdate)
		var dateString = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()
		return (
			<div className="col-lg-4 col-md-6">
				<div className='card'>
					<div className='card-body'>
						<h4 className="card-title">
						<a>{this.props.notice.title}</a></h4>
						<p className="card-text">{this.props.notice.description}</p>
						<small>{dateString}</small>
					</div>
				</div>
				<br/>
			</div>
		);
	}
}

export default NoticeSmall;