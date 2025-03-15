class DatePage{

    get datePickerInp(){return cy.get('#date') }
get successText(){return cy.get('#date-paragraph')}
}
export default new DatePage();