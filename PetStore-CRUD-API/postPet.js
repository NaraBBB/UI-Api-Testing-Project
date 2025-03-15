import axios from "axios";
import { expect } from "chai";

describe("POST request", () => {
  it("Creating new Pet with photo and tags", async () => {
    const payload = {
      id: 149,
      name: "borkov",
      status: "available",
    };

    const postResponse = await axios.post(
      "https://petstore.swagger.io/v2/pet",
      payload
    );

    console.log(postResponse.data);

    //postResponse.data: Verifies that the data returned in the response body matches the expected structure and values (e.g., id and name).
    expect(postResponse.status).to.equal(200); // Verify the expected status code
    expect(postResponse.data).to.have.property("id").that.equals(149);
    expect(postResponse.data).to.have.property("name").that.equals("borkov");
    expect(postResponse.data)
      .to.have.property("status")
      .that.equals("available");
  });
});
