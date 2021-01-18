const request = (url, method = "GET", alias = "request") => {
  cy.request({ method, url, failOnStatusCode: false }).as(alias);
};

export default { request };
