const mapByZip = "https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=AIzaSyDANTNXNHy97irRUaUeoH18BAO3ax4rqts";

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  }