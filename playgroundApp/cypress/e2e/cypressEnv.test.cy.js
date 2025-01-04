import cypressEnvPage from "../pages/cypressEnv.page";

describe("Learning cypress.env commands", () => {
    beforeEach(function () {
      cy.visit("/index.html");
    });

it('should send password to password field', ()=>{
    


cypressEnvPage.passwordInp.type(Cypress.env('password'))

cypressEnvPage.showPasswordCheckBox.check().should('be.checked')
cypressEnvPage.showPasswordCheckBox.uncheck()



})




  
});