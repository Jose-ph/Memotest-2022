
const characters = [

    {"img": "img/img-01.jpg"},
    {"img": "img/img-06.jpg"},
    {"img": "img/img-03.jpg"},
    {"img": "img/img-04.jpg"},
    {"img": "img/img-02.jpg"},
    {"img": "img/img-05.jpg"},
    {"img": "img/img-08.jpg"},
    {"img": "img/img-07.jpg"},

]


 


 const $gameBoard = document.querySelector("#game-board");
const $timer = document.querySelector("#timer");
const $tries = document.querySelector("#tries");
const $startButton = document.querySelector("#start-btn");



let stopTimerId = [];
let matchedCards = 0;
let tries = 0;
let testWonCards = [];

$tries.innerHTML = `<p> Intentos: ${tries} </p>`

$timer.innerHTML = `<p> Tiempo de juego: </p>`
 


$startButton.onclick = function (){   


  
   handleTimer($timer)
  matchedCards = 0;
  tries = 0;
  $tries.innerHTML = `<p> Intentos: ${tries} </p>`
     
  document.querySelector("#win-img").classList.add("none");

  $gameBoard.classList.remove("none");

      removeCards();

        
      $startButton.classList.add("disabled");
      const $welcomeState = document.querySelector("#welcome-state");

      $welcomeState.classList.add("d-none");

      setGameBoard();

       handleRound();

    
}




function setGameBoard(){ 

    //Quiero hacer 4 filas de 4 columnas. 
    //Como uso bootstrap quiero respetar el div class row.
   let duplicatedCharacters =  characters.concat(characters);

    shuffle(duplicatedCharacters);
   
   const $rowNumberOne = document.querySelector("#row-1");
    const $rowNumberTwo = document.querySelector("#row-2");
    const $rowNumberThree = document.querySelector("#row-3");
    const $rowNumberFour = document.querySelector("#row-4");


   
    
   for(let i = 0 ; i < 4 ; i++){

     

      let newCardContainer = document.createElement("div");
      newCardContainer.setAttribute("class","col");
      newCardContainer.classList.add("card");

       let newCardBack = document.createElement("div")
       newCardBack.setAttribute("class","col");
       newCardBack.setAttribute("id", `${i}`);
       newCardBack.classList.add("card-back");


       let newCardFront= document.createElement("img");
       newCardFront.setAttribute("src", `${duplicatedCharacters[i].img}`)
       newCardFront.setAttribute("alt", `one punch man character`);
       newCardFront.setAttribute("class", "front");
       newCardFront.classList.add("none");
       



        newCardBack.appendChild(newCardFront);

        $rowNumberOne .appendChild(newCardBack);
        $gameBoard.appendChild($rowNumberOne);

   }



  for(let i = 4 ; i < 8; i++){

    
    let newCardContainer = document.createElement("div");
    newCardContainer.setAttribute("class","col")
    newCardContainer.classList.add("card");

     let newCardBack = document.createElement("div")
     newCardBack.setAttribute("class","col")
     newCardBack.setAttribute("id", `${i}`);
     newCardBack.classList.add("card-back");


     let newCardFront= document.createElement("img");
     newCardFront.setAttribute("src", `${duplicatedCharacters[i].img}`)
     newCardFront.setAttribute("alt", `one punch man character`);
     newCardFront.setAttribute("class", "front");
     newCardFront.classList.add("none");
     


     
  
  

      newCardBack.appendChild(newCardFront);

      
      $rowNumberTwo .appendChild(newCardBack);
      $gameBoard.appendChild($rowNumberTwo);

 }

 for(let i = 8; i < 12; i++){


  let newCardContainer = document.createElement("div");
  newCardContainer.setAttribute("class","col")
  newCardContainer.classList.add("card");

   let newCardBack = document.createElement("div")
   newCardBack.setAttribute("class","col")
   newCardBack.setAttribute("id", `${i}`);
   newCardBack.classList.add("card-back");


   let newCardFront= document.createElement("img");
   newCardFront.setAttribute("src", `${duplicatedCharacters[i].img}`)
   newCardFront.setAttribute("alt", `one punch man character`);
   newCardFront.setAttribute("class", "front");
   newCardFront.classList.add("none");
   


   



    newCardBack.appendChild(newCardFront);

   
    $rowNumberThree .appendChild(newCardBack);
    $gameBoard.appendChild($rowNumberThree);

   

 }

 for(let i = 12; i < 16; i++){


  let newCardContainer = document.createElement("div");
  newCardContainer.setAttribute("class","col")
  newCardContainer.classList.add("card");

   let newCardBack = document.createElement("div")
   newCardBack.setAttribute("class","col")
   newCardBack.setAttribute("id", `${i}`);
   newCardBack.classList.add("card-back");


   let newCardFront= document.createElement("img");
   newCardFront.setAttribute("src", `${duplicatedCharacters[i].img}`)
   newCardFront.setAttribute("alt", `one punch man character`);
   newCardFront.setAttribute("class", "front");
   newCardFront.classList.add("none");
   


   



    newCardBack.appendChild(newCardFront);

    
    $rowNumberFour .appendChild(newCardBack);
    $gameBoard.appendChild($rowNumberFour);

  

 }


   



}




//Shuffle array  (from stack overflow)

function shuffle(array) {

    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
 

function removeCards(){

  const $cardsBacks = document.querySelectorAll(".card-back");

  $cardsBacks.forEach(cardBack => {

    cardBack.remove();
    
  });
}


function handleRound(){



  const $cardsBacks = document.querySelectorAll(".card-back");
  
  let userCards = [];
  


  $cardsBacks .forEach(cardBack => {


    cardBack.onclick = function (event){

      
      

        let  pickedCard = event.target;

        if(!pickedCard.classList.contains("won")){


          flipCard(pickedCard,cardBack);

          if(pickedCard.classList.contains("front")){
  
            pickedCard = event.target.parentElement;
        }
  
  
          userCards.push(pickedCard);

          
  

          if(userCards.length === 2 ){
            
            let sameCard = userCards[0].id === userCards[1].id
           
            console.log( "es la misma carta:",sameCard);

             if(!sameCard){
              blockGameBoard();

           
  
              let isMatch = checkMatch(userCards);
    
              if(isMatch){
    
                matchedCards++;
  
                handleMatchedCards(userCards);
               
                
    
              }
  
              if(!isMatch){
  
                unflipCards(userCards);
                tries++;
  
                console.log("tries", tries);
                $tries.innerHTML = `<p> Intentos: ${tries} </p>`
  
              }
    
             
              userCards = [];
              
              
              setTimeout(() => {
                handleRound();
              }, 1000);


             }
            
            if(sameCard){
              
              userCards.pop();
              
            }
  
            
          }
         

          if(matchedCards === characters.length){

           

          

            clearInterval(stopTimerId[0]);


            setTimeout(() => {
              $gameBoard.classList.add("none");
              
              document.querySelector("#win-img").classList.remove("none");
              tries = 0;
              $startButton.classList.remove("disabled");
              


              

             

            }, 1000);

            
           
          }
    



        }


        else {console.log("bloqueado")}

       
        
    }
    
  });



}


function unflipCards (userCards){

userCards.forEach(userCard => {

  setTimeout(() => {

    userCard.children[0].classList.add("none");
    
  }, 800);

  /* userCard.children[0].classList.add("none"); */
  
});




}


function handleMatchedCards(userCards){


  userCards.forEach(userCard => {

    setTimeout(() => {

      userCard.classList.add("won");
      //console.log(userCard.children);
      userCard.children[0].classList.add("none")
     
      
    }, 800);

  /*   userCard.classList.add("won");
    //console.log(userCard.children);
    userCard.children[0].classList.add("none")
    */
    
  });




}





function checkMatch(userCards){

 
  let match = false;

 

  if(userCards[0].id === userCards[1].id){

    //alert("Esta es la misma carta")
    match = false;
  }

  if(userCards[0].id !== userCards[1].id){

    if(userCards[0].children[0].src === userCards[1].children[0].src){

     
      match = true;
    }

    else {
      
     
      
      match = false;
    
  }



  }


  return match;


}



function flipCard (pickedCard,cardBack){

 console.log(pickedCard);
 
  if(pickedCard.classList.contains("card-back")){

    let cardChildren = pickedCard.children;

    if(cardChildren[0].classList.contains("none")){

      cardChildren[0].classList.remove("none");
      //cardChildren[0].classList.add("picked");
      cardBack.classList.add("picked");

  }

}


}



function blockGameBoard (){

  const $cardsBacks = document.querySelectorAll(".card-back");


  $cardsBacks.forEach(cardBack => {


    cardBack.onclick = ()=>{

      console.log("bloqueado");
    }
    
  });


}

function handleTimer(timer){

  
  let seconds = 0;


  let idInterval= setInterval(() => {
      seconds++
      timer.innerText = `Tiempo de juego: ${seconds} segundos `
      
  }, 1000);

  stopTimerId.push(idInterval);
}





