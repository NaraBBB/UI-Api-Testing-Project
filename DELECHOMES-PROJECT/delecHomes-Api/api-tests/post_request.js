import axios from "axios";
import { expect } from "chai";
import fs from "fs";
import FormData from "form-data";
import { TextDecoder } from "util";  // Node's built-in TextDecoder
import dotenv from "dotenv";
import { getBearerToken } from '../authHelper.js';
dotenv.config();
let bearerToken; // Declare a global variable
describe("Create Listing API", () => {

// before(async () => {
       // Assign the value to the global `bearerToken` variable
//       bearerToken = await getBearerToken();
//       console.log("Bearer Token:", bearerToken);
//     });





  it("should upload estate data (similar to Cypress approach)", async () => {
    const imageBuffer = fs.readFileSync("./fixtures/homeAloneHouse.png");
    console.log("Type of imageBuffer:", typeof imageBuffer); 
    console.log("Length of imageBuffer:", imageBuffer.length);
    // If length is 0, you have a problem reading the file.
    
    // 2. Create FormData & append binary file
    const formData = new FormData();
    formData.append("images", imageBuffer, "homeAloneHouse.png");
    formData.append("title", "Beautiful House");
    formData.append("address", "123 Main Street");
    formData.append("city", "Los Angeles");
    formData.append("state", "CA");
    formData.append("zipCode", "90001");
    formData.append("images", imageBuffer, {
      filename: "homeAloneHouse.png",
      contentType: "image/png",
    });
    
    formData.append("price", 750000);
    formData.append("bedrooms", 3);
    formData.append("bathrooms", 2);
    formData.append("garage", 1);
    formData.append("sqft", 2000);
    formData.append("lotSize", 8000);
    formData.append("isPublished", true);
    formData.append("description", "A lovely home with modern amenities.");

    // 3. Grab or build your bearer token
    //    (In Cypress, you did localStorage.getItem("accessToken"). 
    //     Here, we might use process.env or something else.)
    const bearerToken = `Bearer ${process.env.ACCESS_TOKEN || ""}`;

    // 4. Make the request via Axios
    let response;
    try {
      response = await axios.post(
        // Adjust your URL if needed
        "https://dev.delekhomes.com/api/estate-objects",
        formData,
        {
          headers: {
            Authorization: bearerToken,
            ...formData.getHeaders(), // important for multipart/form-data
          },
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          validateStatus: null, // let us handle status check manually
        }
      );
    } catch (error) {
      // If request fails at the transport level, catch it
      console.error("Transport error:", error.message);
      throw error;
    }

    // 5. Check the status code & parse body
    console.log("Status:", response.status);
    expect(response.status).to.be.oneOf([200, 201]); // or whatever codes you expect

    // If server responds with JSON text, Axios automatically sets `response.data`.
    // But if the server is returning raw bytes (similar to Cypress body),
    // we could decode it manually, e.g.:
       const decoder = new TextDecoder("utf-8");
       const decodedString = decoder.decode(response.data);
       const parsed = JSON.parse(decodedString);

    // In many APIs, response.data is already parsed if content-type is JSON:
    console.log("Response data:", response.data);

    // If the response was indeed binary/Buffer, do this:
    //   const decoder = new TextDecoder("utf-8");
    //   const decodedString = decoder.decode(response.data);
    //   console.log("Decoded string:", decodedString);
    //   const parsedBody = JSON.parse(decodedString);
    //   const listingId = parsedBody.id;
    //   console.log("Listing ID:", listingId);

    // If it's JSON, you can just do:
    // const { id: listingId } = response.data || {};
    // console.log("Listing ID:", listingId);

    // // 6. Basic assertion
    // expect(listingId).to.exist;
  });
});
