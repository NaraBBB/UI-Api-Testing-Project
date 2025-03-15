describe("Opencart Admin - Customer Management", () => {

  before(function (){
    // Visit the login page
    cy.visit("/admin")
    cy.wait(2000); // Wait 2 seconds
  });

  it("login", () => {
    // Login
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get('[class="btn btn-primary"]').click();
   
      //! Close the modal window if it appears
   cy.get(".btn-close").click();
 
})

//  it("Navigate to Customers -> Customers menu", ()=>{
//   cy.wait(10000); // Wait 2 seconds
  //cy.log('#menu-customer')
//   cy.get('#menu-customer').click(); // customers main menu
 
//   cy.get("#menu-customer>ul>li:first-child").click(); // customers sub/child item
//  })
    
  
});

//it("Check cell data from specific row & Columns", () => {});
