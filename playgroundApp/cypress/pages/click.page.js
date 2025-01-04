class ClickPage{

get subscribeButton() {return cy.xpath("//button[@type='submit']")}
get successfullySubscribeMsg() {return cy.get('#success')}

}

export default new ClickPage()