
describe('API CHAINING IN CYPRESS', () => {
   
    it("Should make API requests and chain them together", () => {
        
        cy.api({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const postid = response.body[0].id // <- exactracting 
            return postid
        }).then((postid)=>{
            cy.api({
                method: "GET",
                url: `https://jsonplaceholder.typicode.com/comments?postId=${postid}`,
            }).then((response)=>{
                expect(response.status).equal(200);
                expect(response.body).to.have.length(5)
            })
        })
    });
});