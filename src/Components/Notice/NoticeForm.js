import React, { Component } from 'react';

class NoticeForm extends Component {
	newNotice = () => {
		var notice = {
			title: this.titleCampo.value,
			description: this.descriptionCampo.value,
			category: this.categoryCampo.value
		}
		this.props.newNotice(notice)
	}
	render() {
		var categories = this.props.categories.map((category) => {
			return (<option key={category._id} value={category._id}>{category.name}</option>)
		})
		return (
			<div className=''>
				<form className='col-lg-10 offset-lg-1' onSubmit={this.newNotice}>
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
					<button className='btn btn-primary'>Post</button>
				</form>
			</div>
		);
	}
}

export default NoticeForm;