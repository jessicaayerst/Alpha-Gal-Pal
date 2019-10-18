const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/allergenTypes/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/allergenTypes`).then(result => result.json())
  }
}