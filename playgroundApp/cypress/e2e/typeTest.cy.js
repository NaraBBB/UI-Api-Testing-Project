import typeMethodPage from "../pages/typeMethodPage"
describe('type method test', ()=> {
    beforeEach(function(){
        cy.visit('/index.html')
    })
    it('Successfully typed  signature', ()=>{
typeMethodPage.signatureInp.type('Mara B')
    })
})