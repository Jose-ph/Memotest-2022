   before(() => {
    cy.visit('http://192.168.1.38:8080');

  }); 
   describe('start the game', () => {
    it('Visits the Kitchen sink', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      cy.url().should('include','/commands/actions')
    })
  })


 


