describe("Site RescueTime", () => {
  it("I can login", () => {
    cy.visit("https://www.paradisulverde.com");

    cy.get(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    ).click();
    cy.get('[data-widget_type="sign-in.default"]').eq(1).click();
    cy.get("#field-email").type("mcposogan@gmail.com");
    cy.get("#field-password").type("parola=123");
    cy.get("#submit-login").click();

    cy.get("#history-link > .link-item > .material-icons").should("exist"); // verifica un element pe pagina
    cy.screenshot(); // Face screenshot la pagina intr-un folder default
  });

  it("I can logout", () => {
    cy.visit("https://www.paradisulverde.com");

    cy.get(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    ).click();
    cy.get('[data-widget_type="sign-in.default"]').eq(1).click();

    cy.get("#field-email").type("mcposogan@gmail.com");
    cy.get("#field-password").type("parola=123");
    cy.get("#submit-login").click();

    cy.get("#history-link > .link-item > .material-icons").should("exist"); // verifica un element pe pagina

    cy.wait(4000); // asteapta 4 sec

    cy.get(".text-sm-center > a").click(); // click pe deconectare

    cy.url().should("include", "back=my-account"); // verifica un segment de url
    
  });
});
