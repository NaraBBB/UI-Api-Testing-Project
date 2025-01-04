
//THERE ARE 4 TYPES OF ALERT

describe("Alerts", () => {

//1-JavaScripts Alert: It will have some text and an  'OK' button
it("Js alert 'OK' button ", () => {
    //  CYPRESS AUTOMATICALLY CLOSES (JavaScripts Alert) BY AUTOMATICALLY CLICKS 'OK' BUTTON
 cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click(); // js alert deer click hiilee

    cy.on("window:alert", (callFunction) => {
      expect(callFunction).to.contains("I am a JS Alert");
    });

    //2- JavaScripts Confirm Alert: It will have some text with 'OK' and 'CANCEL' buttons
it('Js confirm alert CANCEL button', ()=> {

cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
 
cy.get('[onclick="jsConfirm()"]').click();
//ENE BOL AUTOMATICALLY CYPRESS OK DARAAD BID ZUVHUN GARCH IRSEN MSG-G NI VALIDATION HJ BNA
cy.on('window:confirm',(callFunction) => {
    expect(callFunction).to.contains('I am a JS Confirm')
})
//END CYPRESS ALERT WINDOW-G 'CANCEL' DEER DARJ  HAAJ BNA 
cy.on('window:confirm', ()=> false)
cy.get('#result').should('have.text', 'You clicked: Cancel')
  });

})

  //3- JavaScripts Prompt Alert: It will have some text with a text box for user input along with 'OK'
  it.only('Js Prompt sending text and click the OK button', ()=> {
  cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  
cy.window().then((newVariable)=>{
    cy.stub(newVariable, 'prompt').returns('Welcome Mara');
})
//cypress will automatically close prompted alert -it will use 'OK BUTTON' -by default
cy.get('#result').should('have.text','You entered: Welcome Mara')
});


//4 - Authentication Alert
it.only('Authenticated alert', ()=> {

//     //APPRAOCH 1
//         cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
//             {
//             username: "admin",
//             password: "admin"

//         }})
// cy.get('div.example').should('have.contain','Congratulations!')

//    //APPRAOCH 2
//     //admin:admin@ -ENE SHUUD URL-R NI USERNAME BOLON PASSWORD-G NI DAMJUULNA
         cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
})

});