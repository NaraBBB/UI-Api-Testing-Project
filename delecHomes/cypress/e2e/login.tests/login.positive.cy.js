import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/main.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login Tests", () => {
  it("Should successfully login with valid credentials", () => {
    cy.viewport(1366, 768);
    cy.visit("login/");

    homePage.loginBtn.click();
    loginPage.emailInput.type("waped44366@gianes.com");
    loginPage.passwordInput.type("DontTestMe");
    loginPage.loginBtn.click();
    //VERIFY ADMIN ROLE AND TITLE
    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.title.should("eq", "User: Profile | Delek Homes");
  });
});
