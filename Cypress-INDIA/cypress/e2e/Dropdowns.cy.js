describe("Handle dropdowns", () => {
  beforeEach(function () {});
  //This is normal element with "select tag"
  it.skip("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    cy.get("#zcf_address_country")
      .select("Italy")
      .should("have.value", "Italy");
  });

  //HOW TO HANDLE BOOTSTRAP (Dropdown without select tag called)
  it.skip("Dropdown without select tag called BOOTSTRAP", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Japan").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Japan");
  });

  //HOW TO HANDLE AUTO SUGGESTION DROPDOWN AND THOSE SUGGESTIONS ARE STATIC EVERY TIME.
  it.skip("Auto suggest dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Mongolia"); // this will give you all auto suggestion(option) that contains Mopngolia
    cy.get(".suggestion-title").contains("Mongolian language").click();
  });

  //HOW TO HANDLE DYNAMIC DROPDOWN
  it("Auto suggest dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get('[aria-label="Search"]').type("cypress automation");

    cy.wait(3000);

    cy.get("div.eIPGRd").should("have.length", 13); // end bid yg ene haigdsan vg 13 garch bna u gedegiig assert hiij bna

    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() == "cypress automation tutorial") {
        cy.wrap($el).click();
      }
    });
    cy.get("textarea#APjFqb.gLFyf").should(
      "have.value",
      "cypress automation tutorial"
    );
  });
});
