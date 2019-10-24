const remoteURL = "http://localhost:5002"
// Define all methods that get, delete, or save information to the Allergens array in the database.
export default {
  get(id) {
    return fetch(`${remoteURL}/allergens/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/allergens`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/allergens/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newAllergen) {
    return fetch(`${remoteURL}/allergens`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAllergen)
    }).then(data => data.json())
}
}