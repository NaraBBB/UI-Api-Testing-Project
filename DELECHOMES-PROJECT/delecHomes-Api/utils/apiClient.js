import axios from "axios";



// Create a reusable Axios instance
const apiClient = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 10000,
  headers: {
    "Authorization": `Bearer ${process.env.API_TOKEN}`, // Load tokens from environment variables
  },
});

// Export the API client
module.exports = apiClient;
