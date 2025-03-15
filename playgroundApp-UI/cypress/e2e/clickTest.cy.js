import clickPage from "../pages/click.page";
describe("click method test", () => {
  beforeEach(function () {
    cy.visit("/index.html");
  });
  it("Successfully click Subscribe button", function () {
    clickPage.subscribeButton.click();
    clickPage.successfullySubscribeMsg.should(
      "have.text",
      "You've been successfully subscribed to our newsletter.",);
      clickPage.successfullySubscribeMsg.should("not.be.visible", { timeout: 10000 });
     
  });
});
