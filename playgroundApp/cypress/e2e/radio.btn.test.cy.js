import radioBtnPage from "../pages/radioBtn.page";

describe("On and Off Radio Button Testing", () => {
  beforeEach(function () {
    cy.visit("/index.html");
  });

  it("Successfully click the ON radio button and validate color of the ON text", function () {
    radioBtnPage.onRadionBtn.check().should("be.checked");
    radioBtnPage.onMsg
      .should("be.visible")
      .and("have.css", "color", "rgb(0, 128, 0)");

    radioBtnPage.offRadionBtn.should("not.be.checked");
  });

  it("Successfully click the OFF radio button and validate color of the OFF text", function () {
    radioBtnPage.offRadionBtn.check().should("be.checked");

    //VALITADING COLOR OF THE "OFF" WORD
    radioBtnPage.offMsg
      .should("be.visible")
      .and("have.css", "color", "rgb(255, 0, 0)");

    radioBtnPage.onRadionBtn.should("not.be.checked");
  });
});
