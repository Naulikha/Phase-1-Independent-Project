function renderOneCharacter(character){
  
    
    let card = document.createElement("li")
    card.className = "card"
    card.id="card"
    card.innerHTML = `
    <img src="${character.image}">
    <div class="content">
    <h4>Name: ${character.name}</h4>
    <p>
    
    </p>
    <p>Species: ${character.species}</p>
    <p>Status: ${character.status}</p>
    <p>Gender: ${character.gender}</p>
    <p>First appearance: ${character.episode[0]}</p>
    </div>

    <div class="like-dislike-btn">
    
            <!-- Add icon link -->
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         
         <!-- Add a like button -->
         <button class="like-btn">
           <i class="fa fa-thumbs-up"></i>
         </button>
         
         <!-- Add a dislike button -->
         <button class="dislike-btn">
           <i class="fa fa-thumbs-down"></i>
         </button>
         
         <!-- Add a count -->
         <span class="like-count">0</span>
            
</div>
    `
// a  
    document.querySelector('#character-list').appendChild(card)
}

let characters = [];

function getAllCharacters(){
  fetch(`https://rickandmortyapi.com/api/character/?page=19`)
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


