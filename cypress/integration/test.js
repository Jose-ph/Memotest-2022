   before(() => {
    cy.visit('http://192.168.1.38:8080');

  }); 

  describe ('Game first load test', ()=>{


    it ('checks if start button is enabled', ()=>{

      cy.get('#start-btn')
      .should('be.enabled')


    })

    it('checks if timer and tries values are empty',()=>{

      cy.get('#timer').should('have.value','')
      cy.get('#tries').should('have.value',"")


    })

    it('checks is win image is hidden',()=>{

      cy.get('#win-img').should('not.be.visible')

    })

    it('checks if welcome message has the correct text',()=>{

      cy.get('#welcome-state').should('have.text','Apreta el botón comenzar para jugar!')

    })





  })


   describe('starts the game', () => {
    it('checks if start button is disabled after starting the game', () => {
      
      //cy.contains('#start-btn')
       //cy.get('#start-btn').click().should('include','disabled') 
      
     cy.get('#start-btn').click();

     cy.get('#start-btn').should('have.class', 'disabled')
      
      //expect(cy.get('#start-btn')).to.be.disabled
     
    })

    it('checks if the game board is created',()=>{

      cy.get('.card-back').should('have.length', 16)


    })

    it('checks if timers is running',()=>{

      let timer = cy.get('#timer')

      expect(timer).to.not.equal(0)



    })



  })


 


