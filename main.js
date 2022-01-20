const characters = {

    "king": "img/img-01.webp",
    "saitama": "img/img-06.jpeg",
    "bang": "img/img-03.jpeg",
    "garou": "img/img-04.jpeg",
    "kid-emperor": "img/img-02.webp",
    "genos": "img/img-05.jpeg",
    "atomic-samurai": "img/img-08.JPG",
    "watchdog-man": "img/img-07.jpeg",

}

let testDiv = document.createElement("img");
//testDiv.setAttribute("src", characters.king);

testDiv.setAttribute("src", "img/img-01.webp");


document.querySelector("body").appendChild(testDiv);

Object.keys(characters).forEach(key => {

    console.log(characters[key]);
    
});