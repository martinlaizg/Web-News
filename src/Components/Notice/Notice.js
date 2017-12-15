import React, { Component } from 'react';

import Api_access from '../Api_access'

class Notice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notice: {
				_id: null,
				author: {
					name: null
				},
				category: null,
				comments: [],
				description: null,
				keywords: null,
				publishdate: null,
				title: null,
				views: null
			}
		}
	}

	componentDidMount() {
		new Api_access().getNotice(this.props.id).then(response => this.setState({ notice: response.notice }))
	}

	newNotice = () => {
		var notice = {
			title: this.titleCampo.value,
			description: this.descriptionCampo.value,
			category: this.categoryCampo.value
		}
		this.props.newNotice(notice)
	}

	updateNotice = () => {
		var notice = {
			title: this.titleCampo.value,
			description: this.descriptionCampo.value,
			category: this.categoryCampo.value
		}
		this.props.updateNotice(this.state.notice._id, notice)
	}

	deleteNotice = () => {

	}

	render() {
		var content = null
		var categories = this.props.categories.map((category) => {
			return (<option key={category._id} value={category._id}>{category.name}</option>)
		})
		if (this.props.type === 'notice') {
			content = <div>
				<h2>{this.state.notice.title}</h2>
				<br />
				<p className='notice-text text-justify'>{this.state.notice.description}</p>
				<small>Author: {this.state.notice.author.name}   ({this.state.notice.author.username})</small>
				<span className="ml-2 badge badge-info">{this.state.notice.views} visitas</span>
				<div className="col btn-group" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-light" onClick={() => { this.props.changePath('update:' + this.state.notice._id) }}><img src='/svg/pencil.svg' alt='Update' /></button>
					<button type="button" className="btn btn-light" onClick={this.deleteNotice}><img src='/svg/trashcan.svg' alt='Delete' /></button>
				</div>
			</div>
		}
		else if (this.props.type === 'update') {
			content = <div>
				<form className='' onSubmit={this.updateNotice}>
					<div className='form-group'>
						<label htmlFor='noticeTitle'>Titulo</label>
						<input type='text' className='form-control' id='noticeTitle' defaultValue={this.state.notice.title} placeholder='Titulo de la noticia' ref={campo => this.titleCampo = campo} />
					</div>
					<div className='form-group'>
						<label htmlFor='noticeDescription'>Descripción</label>
						<textarea className='form-control' id='noticeDescription' rows='10' defaultValue={this.state.notice.description} placeholder='Descripción de la noticia...' ref={campo => this.descriptionCampo = campo}></textarea>
					</div>
					<div className='form-group'>
						<label htmlFor='noticeCategory'>Categoria</label>
						<select className='form-control' id='noticeCategory' defaultValue={this.state.notice.category._id} ref={campo => this.categoryCampo = campo}>
							{categories}
						</select>
					</div>
					<button type='submit' className='btn btn-primary'>Update</button>
					<button className='ml-2 btn btn-warning' onClick={this.deleteNotice}>Remove</button>
				</form>
			</div>
		}
		else if (this.props.type === 'create') {
			content = <div>
				<form className='' onSubmit={this.newNotice}>
					<div className='form-group'>
						<label htmlFor='noticeTitle'>Titulo</label>
						<input type='text' className='form-control' id='noticeTitle' placeholder='Titulo de la noticia' ref={campo => this.titleCampo = campo} />
					</div>
					<div className='form-group'>
						<label htmlFor='noticeDescription'>Descripción</label>
						<textarea className='form-control' id='noticeDescription' rows='10' placeholder='Descripción de la noticia...' ref={campo => this.descriptionCampo = campo}></textarea>
					</div>
					<div className='form-group'>
						<label htmlFor='noticeCategory'>Categoria</label>
						<select className='form-control' id='noticeCategory' ref={campo => this.categoryCampo = campo}>
							{categories}
						</select>
					</div>
					<button type='submit' className='btn btn-primary' >Crete</button>
				</form>
			</div>
		}
		else {
			content = <div>
				Operación no permitida
			</div>
		}
		return (
			<div className='col-lg-10 offset-lg-1'>
				{content}
			</div>
		);
	}
}

export default Notice;