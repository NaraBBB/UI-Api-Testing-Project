

//! UPDATE
import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("PUT API Request Tests", () => {
  const randomFname = faker.person.firstName();
  const randomJobTitle = faker.person.jobTitle();

  it("Should be able to a update a user details", async () => {
    // Perform the PUT request
    const putResponse = await axios.put("https://reqres.in/api/users/2", {
      name: randomFname,
      job: randomJobTitle,
    });
    console.log(putResponse.data);
    expect(putResponse.status).to.equal(200);
    expect(putResponse.data).to.have.property("name").that.equal(randomFname);
    expect(putResponse.data).to.have.property("job").that.equal(randomJobTitle)
  });
});
