const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/productTypes/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/productTypes`).then(result => result.json())
  }
}