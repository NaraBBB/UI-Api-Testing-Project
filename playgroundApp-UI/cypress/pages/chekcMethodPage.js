class CheckMethodPage{

    get typeSignature() {return cy.get('#signature-textarea-with-checkbox')}
    get previewCheckbox() {return cy.get('#signature-checkbox')}
}
export default new CheckMethodPage()