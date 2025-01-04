import invokeAndTriggerPage from "../pages/invokeAndTrigger.page";

describe("draging range", () => {
  beforeEach(function () {
    cy.visit("/index.html");
  });

  it("should drag range to level 6", () => {

invokeAndTriggerPage.levelRange.invoke("val", 5).trigger("change");

    

invokeAndTriggerPage.levelSlider.should('contain',"You're on level: ")
cy.get('#level-paragraph strong').should('contain', '5');
});
});
