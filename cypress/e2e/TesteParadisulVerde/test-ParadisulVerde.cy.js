describe("ParadisulVerde", () => {
  it("I can login", () => {
    cy.visit("https://www.paradisulverde.com");
    cy.get(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    ).click();
    cy.get('[data-widget_type="sign-in.default"]').eq(1).click();
    cy.get("#field-email").type("mcposogan@gmail.com");
    cy.get("#field-password").type("secret<123");
    cy.get("#submit-login").click();
    cy.get("#history-link > .link-item > .material-icons").should("exist"); 
    cy.screenshot(); 
  });

  it("I can logout", () => {
    cy.visit("https://www.paradisulverde.com");
    cy.get(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    ).click();
    cy.get('[data-widget_type="sign-in.default"]').eq(1).click();
    cy.get("#field-email").type("mcposogan@gmail.com");
    cy.get("#field-password").type("secret<123");
    cy.get("#submit-login").click();
    cy.get("#history-link > .link-item > .material-icons").should("exist"); 

    cy.wait(4000);

    cy.get(".text-sm-center > a").click();

    cy.url().should("include", "back=my-account"); 
    
  });
});
