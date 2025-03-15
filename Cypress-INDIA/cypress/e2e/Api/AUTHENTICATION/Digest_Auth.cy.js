
describe('DIGEST AUTH', () => {
    
    it("SENDING USERNAME AND PASSWORD", () => {
        
        cy.api({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: "postman",
                password: "password",
                method: "digest"
            }
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.authenticated).equal(true)
        })
    });
});