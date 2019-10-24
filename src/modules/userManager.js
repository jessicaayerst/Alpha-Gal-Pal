const remoteURL = "http://localhost:5002";

// Define all methods that get, delete, or save information to the Users array in the database.

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  },
  // Define a method to get all of a specific User's allergens by using the embed method in the fetch call.
  getWithAllergens(id) {
    return fetch(`${remoteURL}/users/${id}?_embed=allergens`)
            .then(result => result.json())
  },
  update(editedUser, id) {
    return fetch(`${remoteURL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }
}