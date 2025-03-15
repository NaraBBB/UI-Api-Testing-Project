import axios from 'axios';

export const getBearerToken = async () => {
  try {
    const userCredentials = {
      email: process.env.USERNAME,
      password: process.env.PASSWORD,
    };

    const response = await axios.post(process.env.AUTH_ENDPOINT, userCredentials);
    const accessToken = response.data.accessToken;

    if (!accessToken) {
      throw new Error("Failed to retrieve access token.");
    }

    return `Bearer ${accessToken}`;
  } catch (error) {
    console.error("Error fetching token:", error.response?.data || error.message);
    throw error;
  }
};
