describe("API", () => {
  it("Passing Query parameters", () => {
    //! esvel query parameteree end global variable-r zarlaad duudaj bolno
    //const queryParam = { page: 2};

    cy.api({
      method: "GET",
      url: "Https://reqres.in/api/users",
      qs: { page: 2 },
      //! qs: queryParam
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.status).equal(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).has.length(6);
      expect(response.body.data[0]).have.property("id", 7);
      expect(response.body.data[0]).has.property("first_name", "Michael");
    });
  });
});
