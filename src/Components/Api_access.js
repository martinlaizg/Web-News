
class Api_access {
	constructor() {
		this.url = 'http://localhost:5000'
	}

	getCategories() {
		return fetch(this.url + '/categories').then(response => response.json())
	}

	createCategory(name) {
		return fetch(this.url + '/categories', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		})
			.then(response => { return response.json() })
	}

	deleteCategory(category) {
		return fetch(this.url + '/categories/' + category, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
			}
		})
			.then(response => { console.log(response) })
	}

	login(user) {
		return fetch(this.url + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(response => {
			return response.json()
		})
	}

	signup(user) {
		console.log(user)
		return fetch(this.url + '/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(response => {
			return response.json()
		})
	}
}

export default Api_access