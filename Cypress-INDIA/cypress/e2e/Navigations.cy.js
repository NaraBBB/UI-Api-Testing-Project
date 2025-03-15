
//!go()
//!reload()

describe('My suite', () => {


    beforeEach(() => {
        cy.bootStrapErrorHandler();
    });
    it('NavigationTest', () => {
        
cy.visit("https://demo.opencart.com/");
cy.title().should('eq',"Your Store") // Home page title

cy.get("li:nth-child(7) a:nth-child(1)").click(); // now we are on the Camera page
cy.xpath("//h2[text()='Cameras']")
  .should('be.visible')// and validating camera page's header

cy.go('back'); //now we are back to Homepage 
cy.title().should('eq',"Your Store") //and again we asserting Home page's title

cy.go(-1);//! back adilhan



cy.go('forward'); //We are going back to Camera page
cy.get("div[id='content'] h2").should('have.text', "Cameras")// and validating camera page's header
cy.go(1) //!forward adilhan


//! this command will be reload the page 
cy.reload()
    });
});