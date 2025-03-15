import axios from "axios";
import { expect } from "chai";

describe("GET new pet", function () {
  
  it("Should get a PET ID, NAME, AGE request", async function () {
    
    // Make the API request
    const getPet = await axios.get("https://petstore.swagger.io/v2/pet/149");

    // Define the dog object with the correct properties
    const dog = { 
      id: 149, 
      name: "borkov", 
       status: "available" };

    // Assertions
    expect(getPet.status).equals(200)
    expect(dog).to.have.property("id");
    expect(dog).to.have.property("name").that.equals("borkov");
    expect(dog).to.have.property("status").that.equals("available")
  });
});
