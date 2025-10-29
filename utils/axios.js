import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000", // your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies with requests
});
