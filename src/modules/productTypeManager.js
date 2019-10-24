const remoteURL = "http://localhost:5002"

// Define all methods that get, delete, or save information to the productTypes array in the database.

export default {
  get(id) {
    return fetch(`${remoteURL}/productTypes/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/productTypes`).then(result => result.json())
  }
}