  context ('Memotest', ()=>{

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


    describe('Plays the game ',()=>{

      const numberOfCards = 16

      let sameCards, listOfPairs;


      it('checks gameBoard length',()=>{
        cy.get('#game-board').find('.card-back').should('have.length',numberOfCards)
      })

      it('checks that cards are randomly set',()=>{

        let firstCreatedCards =[]
        let secondlyCreatedCards =[]
        cy.get('.card-back').then((cards)=>{

         

          cards.each((i,card)=>{

            firstCreatedCards.push(card.children)
            
          })



        });

        cy.visit('http://192.168.1.38:8080')

        cy.get('#start-btn').click()

        cy.get('.card-back').then((cards)=>{

         

          cards.each((i,card)=>{

            secondlyCreatedCards.push(card.children)
            
          })




        });


        expect(firstCreatedCards).to.not.equal(secondlyCreatedCards)



      })


      it('checks tries', ()=>{
  
        cy.get('#1').click()
        cy.get('#2').click()
        .then(()=>{

          cy.get('#tries').should('have.text',' Intentos: 1 ')

        })
        
   
       })

       
       //TESTEAR UN MATCH

       
       it('resolves the game',()=>{

        
        cy.get('.card-back').then(cuadros => {
          let mapaDePares = obtenerParesDeCuadros(cuadros);
          let listaDePares = Object.values(mapaDePares);

          console.log(mapaDePares)
          console.log(listaDePares)

          listaDePares.forEach((par) => {
            cy.wait(1000).then(()=>{

              cy.get(par[0]).click();
            cy.get(par[1]).click();
            })
            
          });
       })

      })

    })
  


  })




 // código de Fabri en memotest
 function obtenerParesDeCuadros(cuadros) {
  const pares = {};

  cuadros.each((i, cuadro) => {
    //notar que hay un espacio después de h-100
    //amarillo
    const claseColor = cuadro.children[0].src

    if (pares[claseColor]) {
      pares[claseColor].push(cuadro);
    } else {
      pares[claseColor] = [cuadro];
    }
  });

  console.log(pares);
  return pares;
}