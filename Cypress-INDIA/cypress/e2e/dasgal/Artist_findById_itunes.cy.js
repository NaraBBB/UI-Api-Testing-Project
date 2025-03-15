
//** Lookup what artist has ID 1883403? What value does this artist have for the attribute "primaryGenreName
describe('Find artist by ID', () => {
    
    it("Should artist have id 1883403", () => {
        
        cy.api({
            method: "GET",
            url: "http://itunes.apple.com/lookup?id=1883403",
            headers:{ 
                "Accept": "application/json"
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            let responseBody = response.body;
            if(typeof responseBody === "string"){
                responseBody = JSON.parse(responseBody)
            }
            let primary_Genre_Name = responseBody.results[0].primaryGenreName;
            cy.log(`Primary genre name: ${primary_Genre_Name}`);
            expect(responseBody.results[0].primaryGenreName).to.eq(primary_Genre_Name) 
        })
    });

});