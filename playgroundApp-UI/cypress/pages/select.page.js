class SelectMethodPage{

get dropdownArrow() {return cy.get('#selection-type')}
get selectedText() {return cy.get('#select-selection strong')}

get fruitSelectOp() {return cy.get('#fruit')}
get selectedMultipleFruitText() {return cy.get('#fruits-paragraph')}


}
export default new SelectMethodPage()