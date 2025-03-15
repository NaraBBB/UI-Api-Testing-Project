import axios from "axios";
import { describe, it } from "mocha";
import { expect } from "chai";
import dotenv from "dotenv";
dotenv.config();


describe("Delete Listing API Test", function () {
   

  it("should delete listing with id 15032", async function () {
    const listingId = 15033;
    const bearerToken = `Bearer ${process.env.ACCESS_TOKEN || ""}`;
    //try {
        const response = await axios.delete(`${process.env.API_BASE_URL}${listingId}`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Accept-Language": "en-US,en;q=0.8",
        },
      });

      // Assert the status code is 200 (or the expected success code)
      expect(response.status).to.equal(200);

      console.log("Response Data:", response.data);
      expect(response.data).to.have.property("affected", 1); // Check 'affected' field
      expect(response.data.raw).to.be.an("array"); // Validate raw data
      
      
    
      // Assert the response contains success message or similar
    //   console.log("Response Data:", response.data);
    //   expect(response.data).to.have.property("message", "Listing deleted successfully");
  //! IIM ASSERTION MSG BGAAGUI UCHIR ALDAA ZAASAN GARCH IRSEN MSG NI 👆🏽 TER DEED TALIIH

     //catch (error) {
    //   if (error.response) {
    // If the server responds with an error, print it and assert failure
    //     console.error("Error Response Data:", error.response.data);
    //     expect.fail(`Request failed with status ${error.response.status}`);
    //   } else {
       // If there is a network or other issue, throw it
    //     throw error;
    //   }
    // }
  });
});