
describe('', () => {
    
    it('PARSING COMPLEX JSON RESPONSE', () => {

        let totalPrice = 0;
        cy.api(
            {
          method: "GET",// Use cy.request instead of cy.api if cy.api is not configured
          method: "GET",
          url: 'https://fakestoreapi.com/products',
          qs: {limit: 3}
                
      }).then((response) => {
    response.body.forEach(productPrice=> {
        totalPrice = totalPrice + productPrice.price; 
        expect(totalPrice).to.equal(899.23); //limit 5  this is first 5 record's total price.
        
    });
    
    })
    
    })
    });