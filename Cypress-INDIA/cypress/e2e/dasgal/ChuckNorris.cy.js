

describe('Make a request to fetch the joke with a specific ҮГ', () => {
    let SEARCHWORD;
    let firstName;
    let lastName;
    it("", () =>{

        cy.api({
            method: "GET",
            url: " ",
            header: {
                'Accept': 'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })


    })
});