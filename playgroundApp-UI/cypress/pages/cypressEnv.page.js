class SensitiveDataPage{


    get passwordInp(){return cy.get('#password')}
get showPasswordCheckBox() {return cy.get('#show-password-checkbox')}




}
export default new SensitiveDataPage()