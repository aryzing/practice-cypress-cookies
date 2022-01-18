/// <reference types="cypress" />

describe("Cookies", function () {
  it("Load example.com, set cookie for foo1.com", function () {
    Cypress.Cookies.debug(true);
    cy.visit("http://example.com");
    cy.setCookie("c1", "v1", {
      domain: "foo1.com",
    });
    cy.getCookie("c1").then(console.log);
  });
  it("Load example.com, set cookie for example.com", function () {
    cy.visit("http://example.com");
    cy.setCookie("c2", "v2", {
      domain: "example.com",
    });
    cy.getCookie("c2").then(console.log);
  });
  it("Visit example.com, set cookie foo1.com, set cookie example.com, with same name", function () {
    cy.visit("http://example.com");
    cy.setCookie("c3", "v3_2", {
      domain: "example.com",
    });
    cy.setCookie("c3", "v3_1", {
      domain: "foo1.com",
    });
    cy.getCookie("c3").then(console.log);
  });
});
