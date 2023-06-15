// Selecionando elementos do DOM usando seus IDs e atribuindo a variáveis correspondentes
let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let ewaste = document.querySelector("#ewaste");
let ewaste2 = document.querySelector("#ewaste2");
let ewaste3 = document.querySelector("#ewaste3");
let road = document.querySelector("#road");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let launcher = document.querySelector("#launcher");
let startButton = document.querySelector("#start");

// Variável para controlar se o jogo está em andamento ou não
let gaming = false;

// Variável para armazenar o último item de lixo eletrônico exibido
let lastItem = null;

// Variável para armazenar o intervalo de atualização do score
 let interval = null;

 // Variável para armazenar a pontuação do jogador
 let playerScore = 0;

// Função para incrementar o score
let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
 }

 // Evento de clique no botão de início do jogo
 startButton.addEventListener("click", () => {
    container.style.display = "";
    launcher.style.display = 'none';
 });

 //Função que controla a animação do lixo eletrônico
let animationControl = (ewasteNumber)=>{
    switch(lastItem){
        case null:
            // Reinicia a animação dos lixos eletrônicos
            void ewaste.offsetWidth;
            void ewaste2.offsetWidth;
            void ewaste3.offsetWidth;
            // Define qual lixo eletrônico será exibido com base no número recebido por parametro
            switch(ewasteNumber){
                case 0:
                case 1:
                    ewaste.classList.add("ewasteActive");
                    ewaste2.classList.remove("ewasteActive");
                    ewaste3.classList.remove("ewasteActive");
                    break;
                case 2:
                    ewaste2.classList.add("ewasteActive");
                    ewaste.classList.remove("ewasteActive");
                    ewaste3.classList.remove("ewasteActive");
                    break;
                case 3:
                    ewaste3.classList.add("ewasteActive");
                    ewaste.classList.remove("ewasteActive");
                    ewaste2.classList.remove("ewasteActive");
                    break;
            }
            // Armazena o último item exibido
            lastItem = ewasteNumber;
            break;
        // Listener para esperar o término da animação do lixo eletrônico atual
        case 0:
        case 1:
            ewaste.addEventListener('animationend', () => {
                // Define qual lixo eletrônico será exibido com base no número recebido por parametro
                switch(ewasteNumber){
                    case 0:
                    case 1:
                        // Reinicia a animação do lixo eletrônico
                        ewaste.classList.remove("ewasteActive");
                        void ewaste.offsetWidth;
                        ewaste.classList.add("ewasteActive");

                        ewaste2.classList.remove("ewasteActive");
                        ewaste3.classList.remove("ewasteActive");
                        break;
                    case 2:
                        ewaste2.classList.add("ewasteActive");
                        ewaste.classList.remove("ewasteActive");
                        ewaste3.classList.remove("ewasteActive");
                        break;
                    case 3:
                        ewaste3.classList.add("ewasteActive");
                        ewaste.classList.remove("ewasteActive");
                        ewaste2.classList.remove("ewasteActive");
                        break;
                }
            });
            lastItem = ewasteNumber;
            break;
        case 2:
            ewaste2.addEventListener('animationend', () => {
                // Define qual lixo eletrônico será exibido com base no número recebido por parametro
                switch(ewasteNumber){
                    case 0:
                    case 1:
                        ewaste.classList.add("ewasteActive");
                        ewaste2.classList.remove("ewasteActive");
                        ewaste3.classList.remove("ewasteActive");
                        break;
                    case 2:
                        // Reinicia a animação do lixo eletrônico
                        ewaste2.classList.remove("ewasteActive");
                        void ewaste2.offsetWidth;
                        ewaste2.classList.add("ewasteActive");
                        
                        ewaste.classList.remove("ewasteActive");
                        ewaste3.classList.remove("ewasteActive");
                        break;
                    case 3:
                        ewaste3.classList.add("ewasteActive");
                        ewaste.classList.remove("ewasteActive");
                        ewaste2.classList.remove("ewasteActive");
                        break;
                }
            });
            lastItem = ewasteNumber;
            break;

        case 3:
            ewaste3.addEventListener('animationend', () => {
                // Define qual lixo eletrônico será exibido com base no número recebido por parametro
                switch(ewasteNumber){
                    case 0:
                    case 1:
                        ewaste.classList.add("ewasteActive");
                        ewaste2.classList.remove("ewasteActive");
                        ewaste3.classList.remove("ewasteActive");
                        break;
                    case 2:
                        ewaste2.classList.add("ewasteActive");
                        ewaste.classList.remove("ewasteActive");
                        ewaste3.classList.remove("ewasteActive");
                        break;
                    case 3:
                        // Reinicia a animação do lixo eletrônico
                        ewaste3.classList.remove("ewasteActive");
                        void ewaste3.offsetWidth;
                        ewaste3.classList.add("ewasteActive");

                        ewaste.classList.remove("ewasteActive");
                        ewaste2.classList.remove("ewasteActive");
                        break;
                }
            });
            lastItem = ewasteNumber;
            break;
    }
}


// Evento de pressionar a tecla para iniciar o jogo
window.addEventListener("keydown" , (start)=>{
    if(start.code == "Space" && !gaming)
    {
        // Define que o jogo está em andamento
        gaming = true;
        // Oculta a tela de game over
        gameOver.style.display = "none";
        // // Gera um número aleatório para determinar o tipo de lixo eletrônico
        let ewasteNumber = Math.floor(Math.random() * 4);
        // Controla a animação do lixo eletrônico
        animationControl(ewasteNumber);
        // Inicia a animação da estrada
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        // Reinicia a pontuação do jogador
        playerScore = 0;
        // Inicia o intervalo de atualização do score
        interval = setInterval(scoreCounter, 200);
    }
});

// Evento de pressionar a tecla de seta para cima durante o jogo
window.addEventListener("keydown" , (e)=>{
    if((e.code == "ArrowUp" || e.code == "Space") && gaming)
    {
        // Animação do dinossauro
        if(dino.classList != 'dinoActive'){
            dino.classList.add('dinoActive');
            setTimeout(()=> {
                dino.classList.remove('dinoActive');
            }, 500);
        }
        gameOver.style.display = "none";
        let ewasteNumber = Math.floor(Math.random() * 4);
        animationControl(ewasteNumber);
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    }
});

// Função para verificar a colisão entre o dinossauro e o lixo eletrônico
let result = setInterval(()=>{
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let ewasteLeft = parseInt(getComputedStyle(ewaste).getPropertyValue("left"));
    let ewaste2Left = parseInt(getComputedStyle(ewaste2).getPropertyValue("left"));
    let ewaste3Left = parseInt(getComputedStyle(ewaste3).getPropertyValue("left"));
    // Verifica se houve colisão e encerra o jogo
    if((dinoBottom <= 106 && ewasteLeft >= 20 && ewasteLeft <= 145) || (dinoBottom <= 90 && ewaste2Left >= 20 && ewaste2Left <= 145) || (dinoBottom <= 90 && ewaste3Left >= 20 && ewaste3Left <= 145)){
        // Define que o jogo não está mais em andamento
        gaming = false;
        // Exibe a tela de game over
        gameOver.style.display = "block";
        // Interrompe a animação dos lixos eletrônicos
        ewaste.classList.remove("ewasteActive");
        ewaste2.classList.remove("ewasteActive");
        ewaste3.classList.remove("ewasteActive");
        // Interrompe a animação da estrada
        road.firstElementChild.style.animation = "none";
        // Limpa o intervalo de atualização do score
        clearInterval(interval);
        // Reinicia a pontuação do jogador
        playerScore = 0;
        // Reseta o último item exibido
        lastItem = null;
    }
},10);