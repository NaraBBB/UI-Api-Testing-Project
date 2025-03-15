import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { expect } from "chai";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
   

describe("Create Listing API", () => {
    let bearerToken;

    before(async () => {
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
            bearerToken = `Bearer ${accessToken}`;
        } catch (error) {
            console.error("Error fetching token:", error.response?.data || error.message);
            throw error;
        }
    });

    it("Should create a listing with an image and details", async () => {
        try {
            // Create FormData
            
            const formData = new FormData();
          // 1. Build the correct file path
    const filePath = path.join(__dirname, '../fixtures/homeAloneHouse.png');


            formData.append("title", "Beautiful House");
            formData.append("address", "123 Main Street");
            formData.append("city", "Los Angeles");
            formData.append("state", "CA");
            formData.append("zipCode", "90001");
            // 3. Append a valid Node.js ReadStream
formData.append('image', fs.createReadStream(filePath));
            formData.append("price", 750000);
            formData.append("bedrooms", 3);
            formData.append("bathrooms", 2);
            formData.append("garage", 1);
            formData.append("sqft", 2000);
            formData.append("lotSize", 8000);
            formData.append("isPublished", true);
            formData.append("description", "A lovely home with modern amenities.");

            // Make the POST request
            const response = await axios.post(
                "https://dev.delekhomes.com/api/estate-objects",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                Authorization: bearerToken,
                        
                    },
                    // These two properties help with large uploads on the *client side*:
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
                }
            );
            // Validate the response
            expect(response.status).to.equal(201);
            console.log("Response Data:", response.data);
        } catch (error) {
            console.error("Error Response:", error.response?.data || error.message);
            throw error;
        }
    });
});
