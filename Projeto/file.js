let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let ewaste = document.querySelector("#ewaste");
let road = document.querySelector("#road");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//Declarar variáveis para o score
 let interval = null;
 let playerScore = 0;

//Função do score
let scoreCounter = ()=>{
    playerScore++;
    score. innerHTML = `Score <b>${playerScore}</b>`;
 }


//Início do jogo
window.addEventListener("keydown" , (start)=>{
    if(start.code == "Space")
    {
        gameOver.style.display = "none";
        ewaste.classList.add("ewasteActive") ;
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        // Score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

window.addEventListener("keydown" , (e)=>{
    if(e.code == "ArrowUp")
    {
        if(dino.classList != 'dinoActive'){
            dino.classList.add('dinoActive');
            setTimeout(()=> {
                dino.classList.remove('dinoActive');
            }, 500);
        }
        gameOver.style.display = "none";
        ewaste.classList.add("ewasteActive") ;
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    }
});

window.addEventListener("keydown" , (e)=>{
    if(e.code == "Space")
    {
        if(dino.classList != 'dinoActive'){
            dino.classList.add('dinoActive');
            setTimeout(()=> {
                dino.classList.remove('dinoActive');
            }, 500);
        }
        gameOver.style.display = "none";
        ewaste.classList.add("ewasteActive") ;
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    }
});

let result = setInterval(()=>{
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let ewasteLeft = parseInt(getComputedStyle(ewaste).getPropertyValue("left"));
    if(dinoBottom <= 90 && ewasteLeft >= 20 && ewasteLeft <= 145){
        gameOver.style.display = "block";
        ewaste.classList.remove("ewasteActive") ;
        road.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
},10);