//You entered: assa

describe("Alert", () => {
    it("JS Promt",() => {
        cy.visit("https://testautomationpractice.blogspot.com")
        cy.window().then((window)=> {
            //cy.stub(window,'prompt').returns('This is a hello world 
            //from the promt alert')
            //cy.xpath('//*[@id="content"]/div/ul/li[3]/button').click()
            cy.contains('button','Alert').click();
            cy.on("window:alert", (message)=>{
                expect(message).to.be.equal("I am an alert box!");
            });
            cy.contains('button','Confirm Box').click()
            //cy.on("window:confirm",() => true);
            // cy.get('p#demo').should("have.text", "You pressed OK!");
            // cy.contains('button','Confirm Box').click()
         
            cy.on("window:confirm",() => false);
            cy.get('p#demo').should("have.text", "You pressed Cancel!");

            // //Prompt
            // cy.window().then(window) => {
            //     cy.stub(window,'Prompt').returns('Harry Potter')
            //     cy.contains('button','promt')
            
        });
        });
    })
