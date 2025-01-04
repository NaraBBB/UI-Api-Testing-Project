
Cypress.Commands.add('errorHandler', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
 // Ignore errors related to "bootstrap is not defined"
 if (err.message.includes('bootstrap is not defined')) {
    return false; // Prevent Cypress from failing the test
}
// Allow other exceptions to fail the test
return true;
});
    });
  

    //iframe command
    Cypress.Commands.add('getIframe', (iframeSelector) => {
        return cy
          .get(iframeSelector)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then(cy.wrap);
      });
      