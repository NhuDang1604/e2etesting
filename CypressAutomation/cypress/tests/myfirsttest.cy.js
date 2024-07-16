// cypress/integration/sample_spec.js
describe('My First Test', () => {
    it('Does something', () => {
      cy.visit('https://example.com')
      cy.contains('Hello').should('be.visible')
    })
  })
  