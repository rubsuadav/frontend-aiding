const baseUrl = "http://localhost:3000/";

describe("Error 404", () => {
  it("renders", () => {
    cy.visit(baseUrl + "error404");
  });
});
