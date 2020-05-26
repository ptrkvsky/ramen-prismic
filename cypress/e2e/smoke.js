describe("Home Page", () => {
  it("should load the site", () => {
    // "baseUrl" set in "cypress.json"
    cy.visit("/").contains("Ramen Noob")
  })
})
