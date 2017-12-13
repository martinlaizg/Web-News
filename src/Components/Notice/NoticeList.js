import React, { Component } from 'react';
import NoticeSmall from './NoticeSmall';

class NoticeList extends Component {
	constructor(props) {
		super(props)
		this.state = { notices: [] }
	}
	componentDidMount() {
		this.getNotices()
	}

	getNotices = () => {
		this.setState({
			notices: [{
				'_id': '5a1c5fa1866cb20016f1c37d',
				'title': 'El Gobierno eliminará todas las calles que no aparezcan en Google Maps',
				'description': 'Cada día, miles de conductores españoles se pierden al circular por las ciudades debido a las difere...',
				'author': {
					'_id': '59f5f0689ddfa7561b18882f',
					'username': 'martinlaiz',
					'name': 'Martin Laiz'
				},
				'category': null,
				'views': 0,
				'keywords': 'movistar puidemont 155',
				'publishdate': '2017-11-30T08:28:00.000Z'
			},
			{
				'_id': '5a1c5fa1866cb20016f1c37d',
				'title': 'El Gobierno eliminará todas las calles que no aparezcan en Google Maps',
				'description': 'Cada día, miles de conductores españoles se pierden al circular por las ciudades debido a las difere...',
				'author': {
					'_id': '59f5f0689ddfa7561b18882f',
					'username': 'martinlaiz',
					'name': 'Martin Laiz'
				},
				'category': null,
				'views': 0,
				'keywords': 'movistar puidemont 155',
				'publishdate': '2017-11-30T08:28:00.000Z'
			},
			{
				'_id': '5a1c5fa1866cb20016f1c37d',
				'title': 'El Gobierno eliminará todas las calles que no aparezcan en Google Maps',
				'description': 'Cada día, miles de conductores españoles se pierden al circular por las ciudades debido a las difere...',
				'author': {
					'_id': '59f5f0689ddfa7561b18882f',
					'username': 'martinlaiz',
					'name': 'Martin Laiz'
				},
				'category': null,
				'views': 0,
				'keywords': 'movistar puidemont 155',
				'publishdate': '2017-11-30T08:28:00.000Z'
			},
			{
				'_id': '5a1c5fa1866cb20016f1c37d',
				'title': 'El Gobierno eliminará todas las calles que no aparezcan en Google Maps',
				'description': 'Cada día, miles de conductores españoles se pierden al circular por las ciudades debido a las difere...',
				'author': {
					'_id': '59f5f0689ddfa7561b18882f',
					'username': 'martinlaiz',
					'name': 'Martin Laiz'
				},
				'category': null,
				'views': 0,
				'keywords': 'movistar puidemont 155',
				'publishdate': '2017-11-30T08:28:00.000Z'
			},
			{
				'_id': '5a1c5fa1866cb20016f1c37d',
				'title': 'El Gobierno eliminará todas las calles que no aparezcan en Google Maps',
				'description': 'Cada día, miles de conductores españoles se pierden al circular por las ciudades debido a las difere...',
				'author': {
					'_id': '59f5f0689ddfa7561b18882f',
					'username': 'martinlaiz',
					'name': 'Martin Laiz'
				},
				'category': null,
				'views': 0,
				'keywords': 'movistar puidemont 155',
				'publishdate': '2017-11-30T08:28:00.000Z'
			}]
		})

		/*fetch('http://localhost:5000/notices', {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': localStorage.token
			}
		})
			.then((response) => {
				return response.json()
			})
			.then((noticeList) => {
				this.setState({
					notices: noticeList.notices
				})
			})
			.catch((error) => {
				console.log('Error: ' + error)
			})*/
	}

	render() {
		return (
			<div>
				<h1>Últimas noticias</h1>
				<div className='row'>
					{this.state.notices.map((notice, index) => {
						return <NoticeSmall key={index}
							notice={notice} />
					})}
				</div>
			</div>
		);
	}
}

export default NoticeList;