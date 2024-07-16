describe("Assertion demo", () => {
    it("Implicit assertion", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
      cy.url().should('include', 'orangehrmlive.com');
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.url().should('contain', 'orangehrm');
  
      // Example of using cy.xpath
      cy.xpath("//input[@name='username']").should('be.visible');
    });
  });