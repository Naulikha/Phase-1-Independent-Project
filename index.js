// Define an asynchronous function called renderOneCharacter which is responsible for rendering a single character object onto the webpage.
async function renderOneCharacter(character){

  // Initialize the likeCount and dislikeCount variables.
  let likeCount = 0
  let dislikeCount = 0

  // Create a like button element and set its class and innerHTML properties.
  const likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i>'

  // Add an event listener to the like button that increments the likeCount and updates the text content of the corresponding span element.
  likeBtn.addEventListener('click', () => {
    likeCount ++
    count.textContent = likeCount
  })
  
  // Create a dislike button element and set its class and innerHTML properties.
  const dislikeBtn = document.createElement('button')
  dislikeBtn.className = 'dislike-btn'
  dislikeBtn.innerHTML = '<i class="fa fa-thumbs-down"></i>'

  // Add an event listener to the dislike button that increments the dislikeCount and updates the text content of the corresponding span element.
  dislikeBtn.addEventListener('click', () => {
    dislikeCount ++
    dcount.textContent = dislikeCount
  })
  
  // Create a span element to display the like count and set its class and innerHTML properties.
  const count = document.createElement('span')
  count.className = 'like-count'
  count.innerHTML = likeCount

  // Create a span element to display the dislike count and set its class and innerHTML properties.
  const dcount = document.createElement('span')
  dcount.className = 'dislike-count'
  dcount.innerHTML = dislikeCount
  
  // Create a div element to contain the like and dislike buttons and their corresponding count spans.
  const likeDislike = document.createElement('div')
  likeDislike.className = 'like-dislike-btn'

  // Append the like and dislike buttons and their corresponding count spans to the likeDislike div.
  likeDislike.append(likeBtn)
  likeDislike.append(count)
  likeDislike.append(dislikeBtn)
  likeDislike.append(dcount)
  
  // Create a card element to contain the character's information and set its class, id, and innerHTML properties.
  let card = document.createElement("li")
  card.className = "card"
  card.id="card"
  card.innerHTML = `
    <img src="${character.image}">
    <div class="content">
      <h4>Name: ${character.name}</h4>
      <p></p>
      <p>Species: <a id="link" href ="${character.species}" class="species">${character.species}</a></p>
      <p>Status:  <a id="link" href ="${character.status}" class="status">${character.status}</a></p>
      <p>Gender: <a id="link" href ="${character.gender}" class="gender"> ${character.gender}</a></p>
      <p>First appearance:<a href ="${character.episode[0]}" class="episode"> ${character.episode[0]}</a></p>
      <p>Origin:  <a id="link" href ="${character.origin.name}" class="origin-name">${character.origin.name}</a></p>
    </div>
  `
  
  // Append the likeDislike div to the card element.
  card.append(likeDislike)

  // Append the card element to the character list on the webpage.
  document.querySelector('#character-list').appendChild(card)

  // Add event listeners to all links on the card to change


   // select all anchor tags on the page
const links = document.querySelectorAll('a');

// apply styling to each link
links.forEach(link => {
  link.style.textDecoration = 'none'; // remove underline
  link.style.color = 'inherit'; // inherit color from parent element

  // add event listener for when user hovers over a link
  link.addEventListener('mouseover', function() {
    link.style.color =  "rgb(139, 252, 148)"; // change color on hover
  });

  // add event listener for when user hovers out of a link
  link.addEventListener('mouseout', function() {
    link.style.textDecoration = 'none'; // remove underline
    link.style.color = 'inherit'; // inherit color from parent element
  });
});

// select all elements with class "episode"
const episodes = document.querySelectorAll('.episode');

// add event listener to each episode element
episodes.forEach(episode => {
  episode.addEventListener('click', e => {
    e.preventDefault(); // prevent default link behavior

  });
});
}

// array to store character data
let characters = [];

// function to fetch all characters from API and render them on the page
function getAllCharacters(){
  fetch(`https://rickandmortyapi.com/api/character/?page=19`) // fetch data from API endpoint
    .then(response => response.json()) // parse response as JSON
    .then(characterData => {
      characters = characterData.results; // store character data in array
      characters.forEach(character => renderOneCharacter(character)); // render each character on the page
    }) 
}

// function to search characters based on user input
function searchCharacters(query){
  const filteredCharacters = characters.filter(character => {
    const name = character.name.toLowerCase();
    return name.includes(query.toLowerCase()); // return true if character name includes query string
  });
  document.querySelector('#character-list').innerHTML = ''; // clear existing character list
  filteredCharacters.forEach(character => renderOneCharacter(character)); // render filtered characters
}

// event listener for search input field
document.querySelector('#search').addEventListener('input', (event) => {
  const query = event.target.value.trim(); // get input value and trim whitespace
  if (query.length > 0) {
    searchCharacters(query); // filter characters based on query
  } else {
    document.querySelector('#character-list').innerHTML = ''; // clear existing character list
    characters.forEach(character => renderOneCharacter(character)); // render all characters
  }
});



// function to initialize page on load
function initialize(){
  getAllCharacters(); // fetch and render all characters
}

// event listener for when DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  initialize(); // initialize page
});
