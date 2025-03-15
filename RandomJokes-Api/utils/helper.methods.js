"use strict";
import axios from 'axios';

const baseUrl = "https://api.chucknorris.io/";

class HelperPage {
    async getRandomJoke() {
        // Make the API call
        const response = await axios.get(baseUrl + 'jokes/random');
        return response; // Return the full response object
    }
}

export default new HelperPage();
