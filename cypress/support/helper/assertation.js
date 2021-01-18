const bodyandStatus = async (alias, responseBody, idioma = "pt") => {
  if (idioma === "en") {
    cy.get(alias).should((response) => {
      expect(response.body).to.have.property("full", responseBody);
    });
  } else {
    cy.get(alias).should((response) => {
      expect(response.body).to.have.property("extenso", responseBody);
    });
  }
  responseBody === "Invalid data"
    ? expect(response.status).to.eq(400)
    : expect(response.status).to.eq(200);
};

const methodNotAllowed = async (alias, responseBody) => {
  cy.get(alias).should((response) => {
    expect(response.body).to.contains(responseBody);
    expect(response.status).to.eq(405);
  });
};

export default { bodyandStatus, methodNotAllowed };
