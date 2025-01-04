import axios from "axios";
import { expect } from "chai";
describe("Pet API Tests", function () {
  const baseUrl = "https://petstore.swagger.io/v2/";
  const petId = 150;
  const petData = {
    id: petId,
    name: "borkov",
    status: "available",
  };

  // Set up Axios base URL before all tests
  before(function () {
    axios.defaults.baseURL = baseUrl;
  });

  it("Successfully created pet (POST)", async function () {
    const response = await axios.post("/pet", petData);
    expect(response.status).to.equal(200); // Check HTTP status code
    expect(response.data).to.have.property("id", petId); // Check the response body
    expect(response.data).to.have.property("name", "borkov");
    expect(response.data).to.have.property("status", "available");
  });

  it("Should fetch the created pet (GET)", async function () {
    const response = await axios.get(`/pet/${petId}`);
    // Assert the pet exists and has correct details
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("id", petId);
    expect(response.data).to.have.property("name", "borkov");
  });

  it("Should verify the pet does not exist after deletion (DELETE)", async function () {
    // Step 1: Delete the pet using DELETE request
    const deleteResponse = await axios.delete(`/pet/${petId}`);
    // Assert the pet was successfully deleted
    expect(deleteResponse.status).to.equal(200);

    try {
      const getResponse = await axios.get(`/pet/${petId}`);
      console.log("GET Response Body:", getResponse.data);
      expect(getResponse.data.message).to.equal("Pet not found"); // Adjust based on actual API response
    } catch (error) {
      expect(error.response.status).to.equal(404); // Fallback for standard 404
    }
  });
});

//npx mocha petCRUD.spec.mjs
