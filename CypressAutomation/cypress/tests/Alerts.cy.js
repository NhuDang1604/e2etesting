describe('Handling alerts in Cypress', () => {
    beforeEach(() => {
      // Visit the webpage
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    });
  
    it('should handle a simple alert', () => {
      // Trigger the alert (you can adjust the selector accordingly)
      cy.xpath('//*[@id="content"]/div/ul/li[1]/button').click();

  
      // Handle the alert and assert its text
      cy.on('window:alert', (t) => {
        expect(t).to.equal('I am a JS Alert');
      });
    });
  
    it('should handle a confirmation alert', () => {
      // Trigger the confirmation alert
      cy.xpath('//*[@id="content"]/div/ul/li[2]/button').click();
  
      // Handle the confirmation alert and accept it
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal('I am a JS Confirm');
        return true; // Clicks 'OK'
      });
  
      // Alternatively, dismiss the confirmation alert
      // cy.on('window:confirm', () => false); // Clicks 'Cancel'
    });
  
    it('should handle a prompt alert', () => {
      // Stub the prompt method
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('welcome');
      });  
      // Trigger the prompt alert
      cy.xpath('//*[@id="content"]/div/ul/li[3]/button').click();
      //cy.on('window:confirm',()=> false)
      cy.get("#result").should('have.text','You entered: welcome')
      //auhentication alerts
   
    });
  });
  