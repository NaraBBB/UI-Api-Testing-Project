//! HERE WE JUST WANT TO PARTIALLY UPDATE (ONLY A NAME)

import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("PATCH API Request Tests", () => {
  const randomFname = faker.person.firstName();
  const randomJobTitle = faker.person.jobTitle();

  it("Should be able to a UPDATE ONLY NAME", async () => {
    // Perform the PUT request
    const patchResponse = await axios.patch("https://reqres.in/api/users/2", {
      name: randomFname,
    });
    console.log(patchResponse.data);
    expect(patchResponse.status).to.equal(200);
    expect(patchResponse.data).to.have.property("name").that.equal(randomFname);
  });

  it("End zuvhun ajiliig UPDATE hiij vzii", async () => {
    const patchResponse = await axios.patch("https://reqres.in/api/users/2", {
      job: "zion resident",
    });
    console.log(patchResponse.data);
    expect(patchResponse.status).to.equal(200);
    expect(patchResponse.data).to.have.property("job").that.equals("zion resident")
  });
});
