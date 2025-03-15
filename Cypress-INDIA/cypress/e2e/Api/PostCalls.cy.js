describe("Api testing", () => {
  it("APPRAOCH_1 - hard coded json object", () => {
    const requestBody = {
      id: 149,
      name: "Mike",
      status: "Available",
    };
    cy.api({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id149).to.eq();
      expect(response.body).to.eq("name", "Mike");
      expect(response.body).to.have.property("status", "Available");
    });
  });

  it("APPRAOCH_2 - Faker ashiglana generate data", () => {
    const requestBody = {
      fakeId: faker.string.uuid(), // Generate a UUID for the ID
      fakerStatus: faker.helpers.arrayElement([
        "active",
        "inactive",
        "pending",
      ]),
      fakerName: faker.person.firstName(), // Generates a random first name
      fakerEmail: faker.internet.email(), // Generates a valid random email
    };
    cy.api({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.fakerName).to.eq(requestBody.fakerName);
      //! has.property
      expect(response.body).has.property("email", requestBody.fakerEmail);
      expect(response.body).to.have.property("fakeId").and.to.be.a("number");
      expect(response.body).to.have.property("status", fakerStatus);
    });
  });

  it("APPRAOCH_3 - Dynamically generating json object with JS Math", () => {
    const requestBody = {
      randomName: Math.random().toString(5).substring(2),
      randomEmail: Math.random().toString(5).substring(2) + "@gmail.com",
      randomStatus: Math.floor(Math.random() * 100) + 1,
    };

    cy.api({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users ",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201); // Check if response status is correct
      //!here we validating only data of particular property
      expect(response.body.randomName).to.eq(requestBody.randomName);
      expect(response.body.randomEmail).to.eq(requestBody.randomEmail);
      expect(response.body.randomStatus).to.eq(requestBody.randomStatus);
      // ✅ Correct way to check id (it should exist, but not expect a fixed value)
      expect(response.body).to.have.property("id").and.to.be.a("number");
    });
    console.log(requestBody.randomName);
  });

  it.only("APPROUCH_4 creating user using FIXTURE", () => {
    cy.fixture("userData").then((data) => {
      const requestBody = data;

      cy.api({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/users ",
        body: requestBody,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(requestBody.name);
        expect(response.body.email).to.eq(requestBody.email);
        expect(response.body.status).to.eq(requestBody.status);
        //!here we validating prpperty validating along with data
        expect(response.body).to.have.property("id").and.to.be.a("number");
      });
    });
  });
});
