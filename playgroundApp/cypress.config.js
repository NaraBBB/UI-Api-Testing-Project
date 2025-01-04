import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1400,  // Set to desired width, e.g., 1400 pixels
    viewportHeight: 900,  // Set to desired height, e.g., 900 pixels
    baseUrl: 'https://cypress-playground.s3.eu-central-1.amazonaws.com',
   
  },
});
