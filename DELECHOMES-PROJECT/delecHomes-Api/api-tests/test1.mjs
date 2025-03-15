import { expect } from 'chai';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("Create Listing API", () => {
    let bearerToken;

    before(async () => {
        const userCredentials = {
            email: process.env.USERNAME,
            password: process.env.PASSWORD,
        };

        try {
            const response = await axios.post(process.env.AUTH_ENDPOINT, userCredentials);
            const accessToken = response.data.accessToken;

            if (!accessToken) {
                throw new Error("Failed to retrieve access token.");
            }

            bearerToken = `Bearer ${accessToken}`;
        } catch (error) {
            throw new Error(`Authentication failed: ${error.message}`);
        }
    });

    it("Should create a listing with an image and details", async () => {
        const imagePath = path.join(__dirname, '../fixtures/homeAloneHouse.png');

        // Check if the file exists
        if (!fs.existsSync(imagePath)) {
            throw new Error(`Image file not found at path: ${imagePath}`);
        }

        const base64Image = fs.readFileSync(imagePath, { encoding: 'base64' });

        const payload = {
            title: "Beautiful House",
            address: "123 Main Street",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            image: `data:image/png;base64,${base64Image}`,
            price: 750000,
            bedrooms: 3,
            bathrooms: 2,
            garage: 1,
            sqft: 2000,
            lotSize: 8000,
            isPublished: true,
            description: "A lovely home with modern amenities.",
        };

        try {
            const response = await axios.post(
                "https://dev.delekhomes.com/api/estate-objects",
                payload,
                {
                    headers: {
                        Authorization: bearerToken,
                        "Content-Type": "application/json",
                    },
                }
            );

            // Validate the response
            expect(response.status).to.equal(201);
            console.log("Response Data:", response.data);
        } catch (error) {
            throw new Error(`Failed to create listing: ${error.message}`);
        }
    });
});
