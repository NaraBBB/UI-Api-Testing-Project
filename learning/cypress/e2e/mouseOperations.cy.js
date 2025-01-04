describe("Mouse Operations", () => {
  beforeEach(() => {
    cy.errorHandler();
  });

  it("MouseHover", () => {
    cy.visit("https://demo.opencart.com/");

    //so here we are doing assertion that before mouseover action that mac(1) element haragdahgui bgaag assertion hiij bna
    cy.xpath("//a[normalize-space()='Mac (1)']").should("not.be.visible");
    cy.contains("Desktops").trigger("mouseover").click(); //! here we hovering on this element
    cy.xpath("//a[normalize-space()='Mac (1)']").should("be.visible"); // here after we hovering over on the element this text is visible bgaag assert hiij bna
  });

  it("Right click", () => {
    cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    //! here we clicking mouse-nii baruun taliin towch deer daraad garsan songoltoos 'copy' gedeg element-g songood assertion hiiv
    // APPROACH 1 USING trigger('contextmenu');
    cy.contains("right click me").trigger("contextmenu");
    cy.xpath(" //span[normalize-space()='Copy']").should("be.visible");

    //APPROACH 2 USING rightclick(); METHOD
    cy.contains("right click me").rightclick();
    cy.xpath(" //span[normalize-space()='Copy']").should("be.visible");
  });

  it("Double click", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.frameLoaded("#iframeResult"); // Load the iframe

    // APPROACH 1 USING trigger("dblclick");;
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .trigger("dblclick");
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");

    // APPROACH 1 USING trigger("dblclick");;
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });

  it("Drag and Drop using plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.get("#column-a").drag("#column-b");
  });

  it.only("Scroll to element", () => {
    // Manually save cookies after verifying in the browser
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html", {
      failOnStatusCode: false,
    });
    cy.wait(3000);

    //cy.get(`img[alt="Flag of United States of America"]`).scrollIntoView({ duration: 2000 });
  });
});
