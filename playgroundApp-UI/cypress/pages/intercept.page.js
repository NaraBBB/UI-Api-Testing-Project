class InterceptPage{

// get getTodoBtn()  { return cy.xpath("//button[text()='Get TODO']")}

get getTodoBtn()  { return cy.contains('button', 'Get TODO')}



}
export default new InterceptPage();