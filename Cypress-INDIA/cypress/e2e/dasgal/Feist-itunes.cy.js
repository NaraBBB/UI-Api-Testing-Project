
//** Search for the terms 'Feist', '1234' and limit the results set to 1. and 1. What value does idis artist have for the attribute collectionId  */
describe("", () => {
  it.only("Should find collectionId", () => {
    cy.api({
      method: "GET",
      url: "http://itunes.apple.com/search?term=Feist+1234&limit=1",
    }).then((response) => {
      // Assert the status code is 200 (OK)
      expect(response.status).to.eq(200);
      let responseBody = response.body;
      if (typeof responseBody === "string") {
        responseBody = JSON.parse(responseBody);
      }
      const collectionID = responseBody.results[0].collectionId; // Extract the collectionId from the response body
      cy.log(`Collection ID: ${collectionID}`);// Log the collectionId to the Cypress console
      expect(responseBody.results[0].collectionId).equal(collectionID);
    });
  });
});
