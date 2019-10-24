const remoteURL = "http://localhost:5002"

// Define all methods that get, delete, or save information to the allergenTypes array in the database.

export default {
  get(id) {
    return fetch(`${remoteURL}/allergenTypes/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/allergenTypes`).then(result => result.json())
  }
}