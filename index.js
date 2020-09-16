/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/

document.addEventListener('DOMContentLoaded', function(e){
  const header = document.querySelector("h1#header");
  header.addEventListener('click', function(e){
    toggleColor(e.target);
  });

  const form = document.querySelector("form");
  form.addEventListener('submit', function(e){
    e.preventDefault();
    newPlayer = createNewPlayer(e.target);
    renderPlayer(newPlayer);
  });

  addCustomEventListener('button.like-button','click',taskClickHandler);
  
})



/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/
function createNewPlayer(form){
  const newPlayer = {};
  newPlayer.number = form.number.value;
  newPlayer.name = form.name.value;
  newPlayer.nickname = form.nickname.value;
  newPlayer.photo = form.photo.value;
  newPlayer.likes = 1000;
  //debugger;
  return newPlayer;
}

/***** Deliverable 3 *****/

function addCustomEventListener(selector, event, handler) {
  let rootElement = document.querySelector('div.player-container');
  //since the root element is set to be body for our current dealings
  rootElement.addEventListener(event, function (evt) {
          var targetElement = evt.target;
          while (targetElement != null) {
              if (targetElement.matches(selector)) {
                  handler(evt);
                  return;
              }
              targetElement = targetElement.parentElement;
          }
      },
      true
  );
}

function taskClickHandler(e){
  //debugger;
  const likesP = e.target.parentElement.querySelector('p.likes');
  let likes = parseInt(likesP.innerText.replace(' likes',''));
  likesP.innerText = ++likes + " likes";
}

