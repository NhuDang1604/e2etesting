describe("authentication", () => {
    it('Authentication alert', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        })

        // Add assertions to verify successful authentication
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.');
    });
});
