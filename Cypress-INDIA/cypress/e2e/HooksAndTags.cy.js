
//! before ->  Runs once before all tests in a test suite (describe block) used for one-time setup like initializing resources.
//! after ->
//! beforeEach
//! AfterEach

//Tags s

describe('MyTestSuite', ()=>{

    before(()=>{
        cy.log("***** Launch app *****");
      });

    after(()=>{
        cy.log("***** close App *****");
      });


beforeEach(()=>{
    cy.log("***** LOGIN *****")
})

afterEach(()=>{
    cy.log("***** LOGOUT *****")
})

    it('search', ()=> {
      cy.log("***** searching *****");
    });
  
    it('advanced search', ()=> {
      cy.log("***** advanced searching *****");
    });
  
    it('listing Products', ()=> {
      cy.log("***** Listing products *****");
    });
  
    
  
  
  });
  