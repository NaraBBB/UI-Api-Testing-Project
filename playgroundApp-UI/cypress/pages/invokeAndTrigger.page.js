class InvokeAndTriggerPage{

get levelRange(){return cy.get('#level')}
get levelSlider() {return cy.get('#level-paragraph')}

}
export default new InvokeAndTriggerPage()
