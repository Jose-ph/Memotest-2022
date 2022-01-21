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

    {"img": "img/img-01.webp"},
    {"img": "img/img-06.jpg"},
    {"img": "img/img-03.jpeg"},
    {"img": "img/img-04.jpeg"},
    {"img": "img/img-02.webp"},
    {"img": "img/img-05.jpeg"},
    {"img": "img/img-08.JPG"},
    {"img": "img/img-07.jpeg"},

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
   const $rowNumberOne = document.querySelector("#row-1");
    const $rowNumberTwo = document.querySelector("#row-2");
    const $rowNumberThree = document.querySelector("#row-3");
    const $rowNumberFour = document.querySelector("#row-4");


   console.log(duplicatedCharacters);
 
    
   for(let i = 0 ; i < 4 ; i++){

      /*  let newRow = document.createElement("div"); */

      /*  newRow.setAttribute("class", "row") */

       let newColumn = document.createElement("div")
       newColumn.setAttribute("class","col")

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

     let newColumn = document.createElement("div")
     newColumn.setAttribute("class","col")

     let newCharacterImage = document.createElement("img");
     newCharacterImage.setAttribute("src", `${duplicatedCharacters[i].img}`)
     newCharacterImage.setAttribute("alt", `one punch man character`)

      newColumn.appendChild(newCharacterImage)

      $rowNumberFour.appendChild(newColumn);
      $gameBoard.appendChild($rowNumberFour);

 }





}

setGameBoard()
/* 
let testDiv = document.createElement("img");
//testDiv.setAttribute("src", characters.king);

testDiv.setAttribute("src", "img/img-01.webp");


document.querySelector("body").appendChild(testDiv);

Object.keys(characters).forEach(key => {

    console.log(characters[key]);
    
}); */