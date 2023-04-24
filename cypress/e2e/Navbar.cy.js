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
    cy.get(".login").click({ multiple: true });
    cy.get(".login").first().click();
    cy.get('input[name="username"]').type("rub");
    cy.get('input[name="password"]').type("rub");
    cy.get('button[type="submit"]').click();
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();
  });

  it("cannot login", () => {
    cy.get(".login").click({ multiple: true });
    cy.get(".login").first().click();
    cy.get('input[name="username"]').type("aiding");
    cy.get('input[name="password"]').type("wdwe3");
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
  });
});

describe("Logout", () => {
  it("can logout", () => {
    cy.get(".login").click({ multiple: true });
    cy.get(".login").first().click();
    cy.get('input[name="username"]').type("rub");
    cy.get('input[name="password"]').type("rub");
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
    cy.get(".me-auto").click();
    cy.wait(1000);
    cy.get(".accordion-button").click({ multiple: true });
    cy.get(".accordion-button")
      .first()
      .click()
      .then(() => {
        cy.get("#boton").should("exist");
        cy.get("#boton").click({ force: true });
      });
    cy.get("#retorno").should("be.visible");
    cy.wait(2000);
    cy.get("#retorno").click();
  });
});

describe("Events and Sections", () => {
  it("can list programed events", () => {
    cy.get("#nav-dropdown").click();
    cy.wait(1000);
    cy.get(".shadow").last().click();
    cy.wait(1000);
  });

  it("can list started events", () => {
    cy.get("#nav-dropdown").last().click({ failOnStatusCode: false });
    cy.wait(2000);
  });

  it("can list sections", () => {
    const path = "information/sections";
    cy.visit(baseUrl + path);
    cy.wait(1000);
    cy.get(".card-body").first().click();
    cy.wait(1000);
  });
});

describe("Create Contact", () => {
  it("can create contact", () => {
    const path = "base/contacts/CreateContact";
    cy.visit(baseUrl + path);
    cy.get('input[name="name"]').type("Ruben");
    cy.get('input[name="email"]').type("rsuarezdavid@gmail.com");
    cy.get('input[name="subject"]').type("Test");
    cy.get('textarea[name="message"]').type("Test");
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();
  });
});
