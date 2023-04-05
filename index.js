function renderOneCharacter(character){

  
  // initial likeCount
  let likeCount = 0
  let dislikeCount = 0

  const likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i>'

  // onClick Event
  likeBtn.addEventListener('click', () => {
    likeCount ++
    count.textContent = likeCount
  })
  
  const dislikeBtn = document.createElement('button')
  dislikeBtn.className = 'dislike-btn'
  dislikeBtn.innerHTML = '<i class="fa fa-thumbs-down"></i>'

  dislikeBtn.addEventListener('click', () => {
    dislikeCount ++
    dcount.textContent = dislikeCount
  })
  
  const count = document.createElement('span')
  count.className = 'like-count'
  count.innerHTML = likeCount

  const dcount = document.createElement('span')
  dcount.className = 'dislike-count'
  dcount.innerHTML = dislikeCount
  
  const likeDislike = document.createElement('div')
  likeDislike.className = 'like-dislike-btn'

  // append buttons
  likeDislike.append(likeBtn)
  likeDislike.append(count)
  likeDislike.append(dislikeBtn)
  likeDislike.append(dcount)
  


    
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

    `

    card.append(likeDislike)

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