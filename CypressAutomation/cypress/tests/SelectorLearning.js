// test suite
describe('Tutorialspoint', function () {
    // it function to identify test
    it('Scenario 1', function (){
       // test step to launch a URL
       cy.visit("https://accounts.google.com/signup")
       //checkbox with assertion
       cy.get('input[type="checkbox"]').check().should('be.checked')
       //identify checkbox with class with assertion
       cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck().should('not.be.checked')
    })
 })