

describe("HTTP REQUEST", () => {
    
    it("Get Call", () => {
        cy.api({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
        }).then((response) => {
            // Assertions to verify response
            expect(response.status).to.eq(200); // Status check
            expect(response.body).to.have.property("id", 1); // Body property check
            expect(response.body).to.have.property("userId", 1); // Optional
        });
    });

    it('Post Call', () => {
        cy.api({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                title: "Test post",
                body: "This is Post Call",
                userId: 1
            }   
        }).then((response)=> {
            expect(response.status).to.eq(201)
        })
    });
        it('Put Call', () => {
            cy.api({
                    title: "Test post -Updated",
                    url: "https://jsonplaceholder.typicode.com/posts/1",
                    body: "This is Put Call",
                    userId: 1,
                    id: 1
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
        });

        it('Delete Call', () => {
            cy.api({
                method: 'DELETE',
                url: "https://jsonplaceholder.typicode.com/posts/1"
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
        });
    
});
