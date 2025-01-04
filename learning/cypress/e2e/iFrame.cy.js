
describe('Handling iframe', ()=>{


    it("APPRAOCH 1", ()=>{
cy.visit("https://www.lambdatest.com/selenium-playground/iframe-demo/")
         // Access the iframe and wrap its body
    cy.get("iframe#iframe1") // Use the CSS selector to find the iframe by its id
    .its("0.contentDocument.body") // Access the iframe's body
    .should("not.be.empty") // Ensure the iframe body is loaded
    .then(cy.wrap) // Wrap the iframe's body to allow Cypress commands
    .find("[contenteditable='true']") // Find the contenteditable div
    .clear() // Clear any existing content
    .type("Hi, it's Mara! {cmd+a}"); // Type the text into the editable area

    })
    it.only("APPRAOCH 2 using cypress IFRAME PLUGIN", ()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/iframe-demo")
        cy.frameLoaded("iframe#iframe1")//load the frame
        cy.iframe("iframe#iframe1").clear().type("Welcome")



})
})