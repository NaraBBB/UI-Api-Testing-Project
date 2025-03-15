class ElementsPage{
get emailInp(){return cy.get('[title="Email"]')}
get passWordInp(){return cy.get('#pass')}
get companyInp(){return cy.xpath("//div[@class='element-companyId']//input[@placeholder='Enter your company']")}
get mobileNumInp(){return cy.get("[class='element-companyId'] input[placeholder='Enter your mobile number']")}

get submitBtn() {return cy.get('[value="Submit"]')}

get firstCrushInp(){return cy.get('#inp_val')} 

elementsPageMethod(email, passWord,company, mobile,  firstCrush){
        this.emailInp.type(email);
        this.passWordInp.type(passWord);
        this.companyInp.type(company);
        this.mobileNumInp.type(mobile);

        this.firstCrushInp.type(firstCrush)
    
    


}
}
export default new ElementsPage()