import dateTypeBlurPage from "../pages/dateTypeBlur.page";

describe("File uplaod tests", () => {
    beforeEach(function () {
      cy.visit("/index.html");
    });
  

it('Should send date successfully', ()=> {
  dateTypeBlurPage.datePickerInp.type('2024-11-27').blur()  
  dateTypeBlurPage.successText.should('contain', "The date you've selected is: ")
})
})