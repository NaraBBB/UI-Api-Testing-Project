import interceptPage from "../pages/intercept.page";

describe("Testing that intercepts the request that is triggged after clicking the Get TODO button. Click the button and make sure to wait for the request to happen. Also, make sure a list is displayed.", () => {
    beforeEach(function () {
      cy.visit("/index.html");
    });

    it('Successfully understand intercept command', () => {
        cy.intercept('GET', '**/todos/1', (req) => {
            console.log('Intercepted request:', req);
          }).as('getTodo');
     interceptPage.getTodoBtn.click();
     
     cy.wait('@getTodo', { timeout: 10000 });

     // Assert that the TODO details are displayed in the <ul>
     cy.get('ul').should('contain', 'TODO ID: 1');
     cy.get('ul').should('contain', 'Title: delectus aut autem');
     cy.get('ul').should('contain', 'Completed: false');
          

    })




});

