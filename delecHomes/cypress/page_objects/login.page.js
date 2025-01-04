class LoginPage {
  get emailInput() {return cy.get('[name="email"]')}
    get passwordInput() {return cy.get('[name="password"]')}
    get loginBtn() {return cy.get('[type="submit"]')}


    loginMethod(email, password) {
      this.emailInput.type(email); // Correct usage
      this.passwordInput.type(password); // Correct usage
  this.loginBtn.click()
}
}
export default new LoginPage();
