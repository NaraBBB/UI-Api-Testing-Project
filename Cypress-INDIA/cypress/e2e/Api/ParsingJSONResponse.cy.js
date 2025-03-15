describe('', () => {


it('PARSING SIMPLE JSON RESPONSE VERSION 1', () => {
    cy.api(
        {
      method: "GET",// Use cy.request instead of cy.api if cy.api is not configured
      url: 'https://fakestoreapi.com/products'
  }).then((response) => {

//1 DEH OBJECT-NII VALIDATION 
      expect(response.status).to.eq(200);       // Check if the request was successful
      // Check the first product's details
      expect(response.body[0].id).to.equal(1);
      expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
      expect(response.body[0].price).to.equal(109.95);
      expect(response.body[0].description).equal("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
      expect(response.body[0].rating.rate).to.equal(3.9)
      expect(response.body[0].rating.count).to.equal(120)

//! 19 DEH OBJECT-NII VALIDATION 
expect(response.body[19].id).to.equal(20);
      expect(response.body[19].title).to.equal("DANVOUY Womens T Shirt Casual Cotton Short");
      expect(response.body[19].price).to.equal(12.99);
      expect(response.body[19].rating.rate).to.equal(3.6)
      expect(response.body[19].rating.count).to.equal(145)
})
})
//! PARSING SIMPLE JSON RESPONSE VERSION 2
it('PARSING SIMPLE JSON RESPONSE VERSION 2', () => {

      cy.api({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
          }).then((response) => {
            expect(response.status).to.eq(200); // Ensure the response is successful
          
            // Ensure response body is an array
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0); // Ensure the array is not empty
          
            // Extract first product safely
            const firstProduct = response.body[0];
          
            // Validate first product's properties
            expect(firstProduct.id).to.equal(1);
            expect(firstProduct.title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
            expect(firstProduct.price).to.equal(109.95); 
            expect(firstProduct.description).to.equal(
              "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
            );
          
            // Validate rating object exists
            expect(firstProduct).to.have.property("rating");
            expect(firstProduct.rating).to.have.property("rate");
            expect(firstProduct.rating).to.have.property("count");
          
            // Validate rating values
            expect(firstProduct.rating.rate).to.equal(3.9);
            expect(firstProduct.rating.count).to.equal(120);
          });     
})
});

