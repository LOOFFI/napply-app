import axios from "axios";

// create an axios object with the common settings we need for all requests
// reduces the repetition between requests
const api = axios.create({
  // the initial part of all our backend routes
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  // allows axios to send the cookie to the backend
  withCredentials: true
});

export default api;
