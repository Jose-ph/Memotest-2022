   before(() => {
    cy.visit('http://192.168.1.38:8080');

  }); 
   describe('start the game', () => {
    it('checks if start button is disabled after starting the game', () => {
      
      //cy.contains('#start-btn')
      /* cy.get('#start-btn').click().should('include','disabled') */
      
      cy.get('#start-btn').click();

      cy.get('#start-btn').should('have.class', 'disabled')
      
     // expect(cy.get('#start-btn')).to.be.disabled
     

     // cy.url().should('include','/commands/actions')
    })
  })


 


