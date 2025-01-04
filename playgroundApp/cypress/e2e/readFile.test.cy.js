describe('readFile() method test', ()=> {
    beforeEach(function(){
        cy.visit('/index.html')
    })
it('Should downloads a file, and then, read the file to check if its content is correct', ()=> {

    cy.contains('a','Download a text file').click();
    
    cy.readFile('cypress/downloads/example.txt').should('be.equal', 'Hello, World!')

});
});