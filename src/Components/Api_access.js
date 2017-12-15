
class Api_access {
	constructor() {
		this.url = 'http://localhost:5000'
		//this.url = 'https://api-news-martinlaiz.herokuapp.com'
	}

	getCategories() {
		return fetch(this.url + '/categories').then(response => response.json()).catch(err => { return err })
	}

	createCategory(name) {
		return fetch(this.url + '/categories', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		}).then(response => { return response.json() }).catch(error => { return error })
	}

	deleteCategory(category) {
		return fetch(this.url + '/categories/' + category, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
			}
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	login(user) {
		return fetch(this.url + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	signup(user) {
		return fetch(this.url + '/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	getNotices() {
		return fetch(this.url + '/notices', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	newNotice(notice) {
		return fetch(this.url + '/notices', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
			},
			body: JSON.stringify(notice)
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	getNotice(id) {
		console.log(id)
		return fetch(this.url + '/notices/' + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	deleteNotice(id) {
		console.log(id)
		return fetch(this.url + '/notices/' + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
			}
		}).then(response => { return response.json() }).catch(err => { return err })
	}

	updateNotice(id, notice) {
		return fetch(this.url + '/notices/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
			},
			body: JSON.stringify(notice)
		}).then(response => console.log(response))
		//}).then(response => { return response.json() }).catch(err => { return err })
	}


}

export default Api_access