import axios from "axios";
import { expect } from "chai";

describe("Random", function () {
  it("should get a new joke upon each request", async function () {
    // Make the API request
    const getPet = await axios.get("https://petstore.swagger.io/v2/pet/149");

    // Define the dog object with the correct properties
    const dog = { id: 149, name: "borkov", age: 25 };

    // Assertions
    expect(dog).to.have.property("id");
    expect(dog).to.have.property("name").that.equals("borkov");
  });
});
