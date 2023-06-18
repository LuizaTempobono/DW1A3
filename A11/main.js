let startButton = document.querySelector('#start');
let characterContainer = document.querySelector('#characterContainer');
let characterImg = document.querySelector('#characterImg');
let characterName = document.querySelector('#characterName');
let characterStatus = document.querySelector('#characterStatus');
let characterSpecies = document.querySelector('#characterSpecies');
let characterGender = document.querySelector('#characterGender');
startButton.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 826);
    var url = `https://rickandmortyapi.com/api/character/${random}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data != null) {
                characterContainer.style.display = "";
                let character = data;
                characterImg.src = character.image;
                characterName.innerHTML = character.name;
                characterStatus.innerHTML = character.status;
                characterSpecies.innerHTML = character.species;
                characterGender.innerHTML = character.gender;
                startButton.innerHTML = `Gerar um novo`;
                startButton.style.margin = '15px 0px 0px 0px';
            }
        })
});