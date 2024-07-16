


describe("Check UI Elements",()=>{

    it("Check radio button",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input[id='female']").click()
        cy.get("input[id='female']").should('be.checked')
        cy.get("input#male").should("not.be.checked")
        cy.get("input#male").should("be.visible")

        cy.get("input#sunday").check().should('be.checked')
        cy.get('input#sunday').uncheck().should('not.be.checked')
        cy.get('select#country').click()
        

    
    })
})