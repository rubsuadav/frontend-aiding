const baseUrl = "http://localhost:3000/";

beforeEach(() => {
  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  cy.visit(baseUrl);
});

describe("Footer", () => {
  it("click in footer", () => {
    cy.get("#contacto").click();
  });
});

describe("Login", () => {
  it("can login", () => {
    cy.get(".login").click();
    cy.get('input[name="username"]').type("aiding");
    cy.get('input[name="password"]').type("a1d1ng");
    cy.get('button[type="submit"]').click();
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();
  });

  it("cannot login", () => {
    cy.get(".login").click();
    cy.get('input[name="username"]').type("aiding");
    cy.get('input[name="password"]').type("wdwe3");
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
  });
});

describe("Logout", () => {
  it("can logout", () => {
    cy.get(".login").click();
    cy.get('input[name="username"]').type("aiding");
    cy.get('input[name="password"]').type("a1d1ng");
    cy.get('button[type="submit"]').click();
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();
    cy.get(".logout").click();
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();
    cy.get(".logout").should("not.exist");
  });
});

describe("Resources", () => {
  it("can list resources", () => {
    const path = "information/map-resources";
    cy.visit(baseUrl + path);
    cy.get(".accordion-button").click({ multiple: true });
    cy.get(".accordion-button")
      .first()
      .click()
      .then(() => {
        cy.get("#boton").should("exist");
        cy.get("#boton").click();
      });
    cy.get("#retorno").should("be.visible");
    cy.wait(2000);
    cy.get("#retorno").click();
  });
});

describe("Events", () => {
  it("can list programed events", () => {
    const path = "events/programed";
    cy.visit(baseUrl + path);
    cy.wait(1000);
    cy.get(".shadow").last().click();
  });

  it("can list started events", () => {
    const path = "events/started";
    cy.visit(baseUrl + path);
    cy.wait(1000);
    cy.get(".shadow").last().click();
  });

  it("can list sections", () => {
    const path = "information/sections";
    cy.visit(baseUrl + path);
    cy.wait(1000);
  });
});
