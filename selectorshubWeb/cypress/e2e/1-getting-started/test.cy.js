import elementPage from "../../page_objects/element.page";

describe("Tests", () => {
   beforeEach(() => {
     cy.visit("/");
   
   });
 
   it("Testing ", function () {
   elementPage.emailInp.focus().type("waped44366@gianes.com");
   elementPage.passWordInp.type("DonttestMe")
   elementPage.companyInp.type("codemify")
   elementPage.mobileNumInp.type("7737737337")
   elementPage.submitBtn.click()
   elementPage.firstCrushInp.type("Nara")

   });


})

