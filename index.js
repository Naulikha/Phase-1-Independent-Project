function renderOneCharacter(character){
    
    let card = document.createElement("li")
    card.className = "card"
    card.innerHTML = `
    <img src="${character.image}">
    <div class="content">
    <h4>${character.name}</h4>
    <p>
    
    </p>
    <p>${character.species}</p>
    <p>${character.status}</p>
    <p>${character.gender}</p>
    <p>first appearance:<br>
    ${character.episode[0]}</p>
    </div>
    <div class="buttons">
     <button> LIKE </button><span class="like-count">${character.likes}</span>
     <button> DISLIKE </button><span class="like-count">${character.dislikes}</span>
     </div>
    `
    document.querySelector('#character-list').appendChild(card)
}

let characters = [];

function getAllCharacters(){
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(characterData => {
      characters = characterData.results;
      characters.forEach(character => renderOneCharacter(character));
    }) 
}

function searchCharacters(query){
    const filteredCharacters = characters.filter(character => {
      const name = character.name.toLowerCase();
      return name.includes(query.toLowerCase());
    });
    document.querySelector('#character-list').innerHTML = '';
    filteredCharacters.forEach(character => renderOneCharacter(character));
  }

  document.querySelector('#search').addEventListener('input', (event) => {
    const query = event.target.value.trim();
    if (query.length > 0) {
      searchCharacters(query);
    } else {
      document.querySelector('#character-list').innerHTML = '';
      characters.forEach(character => renderOneCharacter(character));
    }
  });

function initialize(){
    getAllCharacters()
}

initialize()