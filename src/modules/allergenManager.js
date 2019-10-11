const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/allergens/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/allergens`).then(result => result.json())
  }
}