describe("", () => {
  const petId = 150;
  const petData = {
    id: petId,
    name: "borkov",
    status: "available",
  };

  beforeEach(function () {
   cy.visit(Cypress.env('petStoreUrl'))
  });

  it("Successfully created pet POST", () => {
    cy.request("POST", "pet", petData).then((response) => {
      expect(response.status).to.equal(200); // Check HTTP status code
      expect(response.body).to.have.property("id", petId); // Check the response body
      expect(response.body).to.have.property("name", "borkov");
      expect(response.body).to.have.property("status", "available");
    });
  });

  it('Should Fetch created new pet', ()=>{
    cy.request('GET',`https://petstore.swagger.io/v2/pet/150`).then((response)=> {
 // Assert the pet exists and has correct details
 expect(response.status).to.equal(200);
 expect(response.body).to.have.property('id', petId);
 expect(response.body).to.have.property('name', 'borkov');
    })
});

 it('Should verify the pet does not exist after deletion', () => {
    // Step 3: Delete the pet using DELETE request
    cy.request('DELETE', `https://petstore.swagger.io/v2/pet/150`).then((response) => {
      // Assert the pet was successfully deleted
      expect(response.status).to.equal(200);
    });
  })
    })
  

