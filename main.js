/* const characters = [

    {"king": "img/img-01.webp"},
    {"saitama": "img/img-06.jpeg"},
    {"bang": "img/img-03.jpeg"},
    {"garou": "img/img-04.jpeg"},
    {"kid-emperor": "img/img-02.webp"},
    {"genos": "img/img-05.jpeg"},
    {"atomic-samurai": "img/img-08.JPG"},
    {"watchdog-man": "img/img-07.jpeg"},

]
 */

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
/* const $rowNumberOne = document.querySelector("#row-1");
const $rowNumberTwo = document.querySelector("#row-2");
const $rowNumberThree = document.querySelector("#row-3");
const $rowNumberFour = document.querySelector("#row-4");
 */



function setGameBoard(){ //board,characters

    //Quiero hacer 4 filas de 4 columnas. 
    //Como uso bootstrap quiero respetar el div class row.
   let duplicatedCharacters =  characters.concat(characters);

    shuffle(duplicatedCharacters);
   
   const $rowNumberOne = document.querySelector("#row-1");
    const $rowNumberTwo = document.querySelector("#row-2");
    const $rowNumberThree = document.querySelector("#row-3");
    const $rowNumberFour = document.querySelector("#row-4");


   
    
   for(let i = 0 ; i < 4 ; i++){

      /*  let newRow = document.createElement("div"); */

      /*  newRow.setAttribute("class", "row") */

       let newColumn = document.createElement("div")
       newColumn.setAttribute("class","col")
       newColumn.classList.add("back");

       let newCharacterImage = document.createElement("img");
       newCharacterImage.setAttribute("src", `${duplicatedCharacters[i].img}`)
       newCharacterImage.setAttribute("alt", `one punch man character`)

        newColumn.appendChild(newCharacterImage)

        $rowNumberOne .appendChild(newColumn);
        $gameBoard.appendChild($rowNumberOne);

   }

   for(let i = 4 ; i < 8; i++){

    /*  let newRow = document.createElement("div"); */

    /*  newRow.setAttribute("class", "row") */

     let newColumn = document.createElement("div")
     newColumn.setAttribute("class","col")
     newColumn.classList.add("back");

     let newCharacterImage = document.createElement("img");
     newCharacterImage.setAttribute("src", `${duplicatedCharacters[i].img}`)
     newCharacterImage.setAttribute("alt", `one punch man character`)

      newColumn.appendChild(newCharacterImage)

      $rowNumberTwo.appendChild(newColumn);
      $gameBoard.appendChild($rowNumberTwo);

 }

 for(let i = 8; i < 12; i++){

    /*  let newRow = document.createElement("div"); */

    /*  newRow.setAttribute("class", "row") */

     let newColumn = document.createElement("div")
     newColumn.setAttribute("class","col")
     newColumn.classList.add("back");

     let newCharacterImage = document.createElement("img");
     newCharacterImage.setAttribute("src", `${duplicatedCharacters[i].img}`)
     newCharacterImage.setAttribute("alt", `one punch man character`)

      newColumn.appendChild(newCharacterImage)

      $rowNumberThree.appendChild(newColumn);
      $gameBoard.appendChild($rowNumberThree);

 }

 for(let i = 12; i < 16; i++){

    /*  let newRow = document.createElement("div"); */

    /*  newRow.setAttribute("class", "row") */

     let newColumn = document.createElement("div");
     newColumn.setAttribute("class","col");
     newColumn.classList.add("back");

     let newCharacterImage = document.createElement("img");
     newCharacterImage.setAttribute("src", `${duplicatedCharacters[i].img}`)
     newCharacterImage.setAttribute("alt", `one punch man character`)

      newColumn.appendChild(newCharacterImage)

      $rowNumberFour.appendChild(newColumn);
      $gameBoard.appendChild($rowNumberFour);

 }





}




//Shuffle array test (from stack overflow)

function shuffle(array) {
/* 
    let currentIndex = array.length,  randomIndex; */
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
 

 

  const $cardBack = document.querySelector(".card");

  $cardBack.onclick = ()=>{

    const $frontCard = document.querySelector(".front")

    if($frontCard.classList.contains("none")){

       
            $frontCard.classList.remove("none")
            
       
       

    }

    else {

        
            $frontCard.classList.add("none");
    console.log("click")
       

    }
  }