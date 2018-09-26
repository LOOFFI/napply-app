import axios from "axios";

// create an axios object with the common settings we need for all requests
// reduces the repetition between requests
const api = axios.create({
  // the initial part of all our backend routes
  baseURL: "http://localhost:4000/api",
  // allows axios to send the cookie to the backend
  withCredentials: true
});

export default api;
