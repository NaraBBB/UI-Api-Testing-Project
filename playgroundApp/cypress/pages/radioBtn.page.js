class RadioButtonPage{

get offRadionBtn(){return  cy.get('#off')}
get offMsg(){return cy.contains('OFF')}

get onRadionBtn(){return  cy.get('#on')}
get onMsg(){return cy.contains('ON')}

}
export default new RadioButtonPage()