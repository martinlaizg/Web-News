
class Api_access {
	constructor() {
		this.url = 'http://localhost:5000'
	}

	getCategories() {
		return fetch(this.url + '/categories').then(response => response.json())
	}
	createCategory(name) {
		fetch(this.url + '/categories', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({name : name})
		})
		.then(response => response.json())
	}
    /*addItem(item) {
        return fetch(this.API_URL, {
                   method: 'POST',
                   headers: {
                       'Content-type':'application/json'
                   },
                   body: JSON.stringify(item)
               }).then(function (respuesta) {
                   if (respuesta.ok)
                      return respuesta.json()
               })
    }*/
}

export default Api_access