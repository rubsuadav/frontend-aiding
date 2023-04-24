const baseUrl = "http://localhost:3000/";

beforeEach(() => {
  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  cy.visit(baseUrl);
});

describe("CRU Partners", () => {
  it("can create partners?", () => {
    cy.get(".login").click({ multiple: true });
    cy.get('.login').first().click();
    cy.get('input[name="username"]').type("rub");
    cy.get('input[name="password"]').type("rub");
    cy.get('button[type="submit"]').click();
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();

    cy.get("#basic-nav-dropdown").click();
    cy.wait(1000);
    cy.get(".dropdown-item").contains("Socios").click();
    cy.wait(1000);

    cy.get("#table tbody tr")
      .last()
      .find("td")
      .eq(1)
      .invoke("text")
      .then((text) => {
        if (text === "Eugenio") {
          //Antes de crear el mismo socio se debe de comprobar si existe o no 
          cy.get("#boton-socio").click();
          cy.fixture("partners.json").then((datos) => {
            datos.partners.forEach((partner) => {
              cy.visit(baseUrl + "admin/partners/create");
              cy.get('input[name="name"]').type(partner.name);
              cy.get('input[name="last_name"]').type(partner.last_name);
              cy.get('input[name="dni"]').type(partner.dni);
              cy.get('input[name="phone1"]').type(partner.phone1);
              cy.get('select[name="sex"]').select("Hombre");
              cy.get('input[name="account_holder"]').type(
                partner.account_holder
              );
              cy.get('input[name="birthdate"]').type(partner.birthdate);
              cy.get('input[name="address"]').type(partner.address);
              cy.get('input[name="postal_code"]').type(partner.postal_code);
              cy.get('input[name="township"]').type(partner.township);
              cy.get('input[name = "email"]').type(partner.email);
              cy.get('input[name="province"]').type(partner.province);
              cy.get('input[name="iban"]').type(partner.iban);
              cy.get('button[type="submit"]').click(); //comprobamos la existencia de errores de validación
              cy.wait(1000);
            });
          });
        } else {
          cy.get("#boton-socio").click();
          cy.get('input[name="name"]').type("Eugenio");
          cy.get('input[name="last_name"]').type("Lopez");
          cy.get('input[name="dni"]').type("08211168F");
          cy.get('input[name="phone1"]').type("609313612");
          cy.get('select[name="sex"]').select("Hombre");
          cy.get('input[name="account_holder"]').type("Paco");
          cy.get('input[name="birthdate"]').type("1998-02-17");
          cy.get('input[name="address"]').type("calle luna");
          cy.get('input[name="postal_code"]').type("41009");
          cy.get('input[name="township"]').type("Sevilla");
          cy.get('input[name = "email"]').type("euge@gmail.com");
          cy.get('input[name="province"]').type("Sevilla");
          cy.get('input[name="iban"]').type("ES9720809927289474577294");
          cy.get('button[type="submit"]').click();
          cy.get(".swal-modal").should("be.visible");
          cy.get(".swal-button").click(); //se crea correctamente
        }
      });
  });
  /*it("can update partners?", () => {
    cy.get(".login").click();
    cy.get('input[name="username"]').type("rub");
    cy.get('input[name="password"]').type("rub");
    cy.get('button[type="submit"]').click();
    cy.get(".swal-modal").should("be.visible");
    cy.get(".swal-button").click();

    cy.get("#basic-nav-dropdown").click();
    cy.wait(1000);
    cy.get(".dropdown-item").contains("Socios").click();
    cy.wait(1000);

    cy.get("#table tbody tr")
      .last()
      .find("td")
      .eq(1)
      .invoke("text")
      .then((text) => {
        if (text === "Eugenio") {
          //si existe hago el update
          expect(text).to.equal("Eugenio");
          cy.get("#table").contains("Eugenio").click();
          cy.contains("Editar socio").click();
          cy.get('input[name="name"]').clear().type("Luis");
          cy.get('input[name="last_name"]').clear().type("Soto");
          cy.get('input[name="dni"]').clear().type("30341847V");
          cy.get('input[name="phone1"]').clear().type("699395210");
          cy.get('input[name="account_holder"]').clear().type("pedro");
          cy.get('input[name="birthdate"]').clear().type("1998-02-17");
          cy.get('input[name="address"]').clear().type("calle sol 2");
          cy.get('input[name = "email"]').clear().type("EUS@gmail.com");
          cy.get('input[name="iban"]').clear().type("ES0704878981128569689283");
          cy.get('button[type="submit"]').click();
          cy.get(".swal-modal").should("be.visible");
          cy.get(".swal-button").click();
          cy.get("#basic-nav-dropdown").click();
          cy.wait(1000);
          cy.get(".dropdown-item").contains("Socios").click();
          cy.wait(1000);
          cy.get("#table tbody tr")
            .last()
            .then((row) => {
              const element = row.find("td");
              element.remove();
            });
        }
      });
  });*/
});
