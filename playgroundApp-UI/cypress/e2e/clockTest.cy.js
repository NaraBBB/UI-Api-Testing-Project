describe("Таймер шалгах", () => {
    beforeEach(function () {
        const frozenDate= new Date(2024, 3, 15).getTime(); // Month is 0-based (3 = April)
        cy.clock(frozenDate); // Freeze the clock at the specified time
        
    });
it('should display the frozen date', ()=>{
    cy.visit("/index.html");

    cy.contains('pre', 'cy.clock()').scrollIntoView();
    // Assert that the frozen date is displayed correctly
    cy.contains('p', '2024-04-15').should('be.visible'); // Look for the date in a <p> tag
   
})
});