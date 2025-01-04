import selectPage from "../pages/select.page";

describe("On and Off Radio Button Testing", () => {
    beforeEach(function () {
      cy.visit("/index.html");
    });

    it('Successfully selecting option Basic', ()=> {
        selectPage.dropdownArrow.select('Basic').should('have.value', 'basic');
        selectPage.selectedText.should('have.text','BASIC')
    })

    it('Interacting with multiple options select fields', ()=> {
      
selectPage.fruitSelectOp.select(['banana','cherry','elderberry'])
//valitating selected friuts length
selectPage.fruitSelectOp.find(':selected').should('have.length', 3)
//Validating the message after selection.
selectPage.selectedMultipleFruitText.should('contain.text',"You've selected the following fruits: " )

    })

});