const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if(dino.classList !="jump") {
      dino.classList.add("jump")  
    }
    setTimeout ( function() {
dino.classList.remove("jump")
    }, 300)
}

let IsAive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputerStyle(dino).getPropertyvalue("top"));
    let cactusMov = parseInt(window.getComputerStyle(cactus).getPropertyvalue("left"));

    if(cactusMov < 50 && cactusLeft > 0 && dinoTop >= 140 ) {
        alert ("GAME OVER!!")
    }
}, 10)