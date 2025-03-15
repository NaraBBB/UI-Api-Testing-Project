describe('', () => {
    
    let deckID;
    // Create a method that requests a new
    it('Create a method that requests a new', () => {
        cy.api({
            method: "POST",
            url: "https://deckofcardsapi.com/api/deck/new/",
           
        }).then((response)=>{
            expect(response.status).equal(200)

    //  From the response, assign the deck ID to a variable
             deckID = response.body.deck_id;
             expect(deckID).to.exist;
            cy.log(`New deck created with ID: ${deckID}`)
        }) 
    });


    // Make a request using the deck ID variable for 2 cards
    it('Asserting new deck id', () => {
        cy.api({
            method: "GET",
            url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`,
        }).then((response)=>{
            // Todo- Assert that the request was successful
            expect(response.status).equal(200)
        //  Assert that the response deck ID matches the deck requested
            expect(response.body.deck_id).equal(deckID)
  // Assert that the cards has length 2 
            expect(response.body.cards.length).to.equal(2) //hariu expected 2 to equal 2
            // Todo- Assert that there are 50 cards remaining
            expect(response.body.remaining).to.equal(50)
            cy.log(`Cards drawn: ${JSON.stringify(response.body.cards)}`);
        })
    });
});
