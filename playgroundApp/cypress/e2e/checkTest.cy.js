import chekcMethodPage from "../pages/chekcMethodPage"

describe('type method test', ()=> {
    beforeEach(function(){
        cy.visit('/index.html')
    })
it('Successfully signed name and checked checkBox', ()=> {

// Select the input field
chekcMethodPage.typeSignature
// Validate that the initial placeholder is correct
.should('have.attr', 'placeholder', 'Jane Doe')
// Type a new value into the input field
.type('Sara B')
// Validate that the input value is updated to "John Smith"
.should('have.value', 'Sara B');
chekcMethodPage.previewCheckbox.check().should('be.checked')
})


})