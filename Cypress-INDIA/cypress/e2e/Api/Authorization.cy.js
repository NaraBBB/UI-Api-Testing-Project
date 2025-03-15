import { faker } from "@faker-js/faker";
describe("AUTHORIZATION", () => {
  let authToken;

  before("Sending POST REQUEST AND CREATING ACCESS TOKEN", () => {
    const requestBody = {
      clientName: faker.person.firstName(),
      clientEmail: faker.internet.email(),
    };
    cy.api({
      method: "POST",
      url: "https://simple-books-api.glitch.me/api-clients/ ",
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      authToken = response.body.accessToken; //HERE REPSONSE-OOS AWSAN COOKIE-GAA ene authtoken dotor hadgalav
    });
  });
  it("CREATING NEW ORDER", () => {
   
    cy.api({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders/ ",
      body: {
        bookId: "1", // Ensure it's a string if required
        customerName: "Lon.Durgan@hotmail.com",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken} `,
      },
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.created).to.eq(true);
    });
  });
  it("FETCHING THE ORDERS", ()=>{//GET METHOD-R YWUULJ BUH ORDER0-G AVNA
    cy.api({
        method: "GET",
        url: "https://simple-books-api.glitch.me/orders/ ",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken} `,
          },
          cookies:{
            'cookieName': 'mycookie'
          },
  }).then((response)=>{
    expect(response.status).equal(200);
    expect(response.body).has.length(1)
  })   
  })   
});
