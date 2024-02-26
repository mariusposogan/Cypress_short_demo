describe("Site RescueTime", () => {
  it("I can login", () => {
    cy.visit("https://www.paradisulverde.com");

    cy.get(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    ).click();
    cy.get(
      ".elementor-element-3e98ee1.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-de33931 > :nth-child(1) > :nth-child(1) > .elementor-element-9c901e1 > .elementor-container > .elementor-row > .elementor-element-553f544 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-sign-in > #usermenu-6d875ea > .menu-item > .elementor-item"
    ).click();
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
    cy.get(
      ".elementor-element-3e98ee1.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-de33931 > :nth-child(1) > :nth-child(1) > .elementor-element-9c901e1 > .elementor-container > .elementor-row > .elementor-element-553f544 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-sign-in > #usermenu-6d875ea > .menu-item > .elementor-item"
    ).click();

    cy.get("#field-email").type("mcposogan@gmail.com");
    cy.get("#field-password").type("parola=123");
    cy.get("#submit-login").click();

    cy.get("#history-link > .link-item > .material-icons").should("exist"); // verifica un element pe pagina

    cy.wait(4000); // asteapta 4 sec

    cy.get(".text-sm-center > a").click(); // click pe deconectare

    cy.url().should("include", "back=my-account"); // verifica un segment de url
    cy.get("#field-email").type("4_sec_wait_before_logout");
  });
});
