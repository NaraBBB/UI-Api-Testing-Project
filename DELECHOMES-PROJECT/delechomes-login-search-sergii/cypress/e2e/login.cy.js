import loginPage from "../../../../sergii/a/a/cypress/page_objects/loginPage";

describe('', () => {

    beforeEach(() => {
        //cy.visit("/dashboard/user/profile")
        cy.нэвтрэх();

        cy.visit("/")
    });
    
  it("", ()=>{
    loginPage.loginMethod("", "")
  })  

  it("Should create listing", function(){
    //convert image to binary
    cy.fixture('cat.jpg', 'binary').then((image) => {
        const blob = Cypress.Blob.binaryStringToBlob(image, 'cat/jpeg');
        // Blob is now ready for use


    //Create formData object
    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');
    formData.append('lotSize', '8000');
    formData.append('sqft', '2000');
    formData.append('garage', 2);
    formData.append('bathrooms', 3);
    formData.append('bedrooms', 3);
    formData.append('price', '600000');
    formData.append('zipCode', 11111);
    formData.append('address', '555 Best Avenue');
    formData.append('state', 'CA');
    formData.append('city', 'LA');
    formData.append('title', 'Your Beautiful API House');
    formData.append('description', 'A lovely home created through Cypress automation.');
    formData.append('isPublished', false);
    
    //!ene bol token 
    const token = window.localStorage.getItem('accessToken')

    cy.request({
method: 'POST',
url: 'https://dev.delekhomes.com/api/estate-objects',
body: formData,
headers: {
    Authorization: 'Bearer ' + token
}
}).then((response)=>{
    console.log(response);
})


    }); 
    
  })
});