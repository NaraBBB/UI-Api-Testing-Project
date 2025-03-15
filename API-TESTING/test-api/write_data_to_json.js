import dotenv from "dotenv"; // Load environment variables
import axios from "axios"; // HTTP requests
import { promises as fs } from "fs"; // Use async file operations
import { faker } from "@faker-js/faker"; // Generate fake data
import { expect } from "chai"; // Assertions

dotenv.config();// Load environment variables from .env

describe("Write Data To JSON File Tests", () => {
    it("should be able to write data to JSON file", async () => {
      try {
        //! Step 1: Generate random test data
        const randomName = faker.person.firstName(); 
        const randomJobTitle = faker.person.jobTitle()

 //! Step 2: Make POST API request 
 const { data: responseData } = await axios.post(`${process.env.API_URL}/users`, {
    name: randomName,
    job: randomJobTitle,
  }); 
  
  //! Step 3: Log response data for debugging
  console.log(responseData);
   //! Step 4: Assert API response
   expect(responseData.name).to.equal(randomName);
   expect(responseData.job).to.equal(randomJobTitle);

   //! Step 5: Prepare data for writing to JSON file
   const postResponseData = {
     name: responseData.name,
     job: responseData.job,
     id: responseData.id,
     createdAt: responseData.createdAt,
   };

   //! Step 6: Write response data to JSON file
   const filePath = "./response-data/post_response_data.json"
;
   await fs.writeFile(filePath, JSON.stringify(postResponseData, null, 2), "utf8");


   console.log(`Data successfully written to ${filePath}`);
} catch (error) {
  //! Handle errors gracefully
  console.error("An error occurred:", error.message);
}
});
});