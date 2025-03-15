describe("Handling new window", () => {
  
    it("APPRAOCH 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab
    cy.get(".example>a").invoke("removeAttr", "target").click(); //clicking on link
    cy.url().should("contain", "/windows/new");
  });
});
