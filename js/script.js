
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

  //add Pokemon to database
  function add(pokemon) {
    if (typeof pokemon === 'object' &&
      'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  // get database
  function getAll() {
    return pokemonList;
  }

  //this function adds a list item to th liest for each pokemon
  function addListItem(pokemon) {

    let list = $(".pokemon-list");
    let listItem = $("<li></li>");
    let button = $("<button>" + pokemon.name + "</button>");
    button.addClass("btn btn-primary");
    button.attr("data-toggle", "modal"); //this works with bootstrap so the model opens when clicked
    button.attr("data-target", "#pokemonModal");
    listItem.append(button);
    list.addClass("group-list-item");
    list.append(listItem);

    //event listener in clase someone clicks on a pokemon
    button.on('click', function (event) { showDetails(pokemon); });

  }

  //Dislays pokemon details to modal 
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon)
  });
}

    // let pokemonIndex = document.querySelector(".pokemon-list");
    // //creating the list item
    // let listpokemon = document.createElement("li");
    // //creating the button, adding a class to it
    // let button = document.createElement("button");
    // button.innerText = pokemon.name;
    // button.classList.add("btn");
    // button.classList.add("btn");
    // //appending button and list to DOM
    // listpokemon.append(button);
    // pokemonIndex.append(listpokemon);
    // // // adding an event listener to button
    // button.addEventListener('click', function (event) {
    //   let target = event.target;
    //   target.classList.toggle('button--green');
    //   showDetails(pokemon);
 

  function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
};


function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    //now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.weight = details.weight;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

//The functions below show the modal in the browser
function showModal(pokemon) {

  // empty the modal contents
  // modalContainer.innerHTML = '';

  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  // let modalHeader = $(".modal-header");

  // clear contents 
  modalTitle(empty);
  modalBody(empty);
  modalHeader(empty);


  // creating and element for name in modal content
  let nameElement = $("<h1>" + pokemon.name + "</h1>");
  //creating img in modal content
  let imageElementFront = $("<img class='modal-img' style='width:50%'>");
  imageElementFront.attr("src", pokemon.imageUrl);
  //creating an element for height in modal content
  let heightElement = $('<p>' + 'height: ' + pokemon.height + '</p>');
  // creating an elelent for weight in modal content
  let weightElement = $('<p>' + 'weight: ' + pokemon.weight + '</p>')
  //creating an element for types in modal content
  let typesElement = $('<p>' + 'types: ' + pokemon.types + '</p>');
  // creating 
  // </p>document.createElement('div');
  // modal.classList.add('modal');

  // Add the new modal content
  modalTitle.append(nameElement);
  modalBody.append(imageElementFront);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);

}

// let modalContainer = document.querySelector("#modal-container");

// let closeButtonElement = document.createElement('button');
// closeButtonElement.classList.add('modal-close');
// closeButtonElement.innerText = 'Close';
// closeButtonElement.addEventListener('click', hideModal);

// let titleElement = document.createElement('h1');
// titleElement.innerText = pokemon.name;

// let imageElement = document.createElement('img');
// imageElement.src = pokemon.imageUrl;

// let typeElement = document.createElement('p');
// typeElement.innerText = 'type: ' + pokemon.parseInt(types);


// let contentElement = document.createElement('p');
// contentElement.innerText = 'height: ' + pokemon.height;

// modal.appendChild(closeButtonElement);
// modal.appendChild(titleElement);
// modal.appendChild(imageElement);
// modal.appendChild(typeElement);
// modal.appendChild(contentElement);
// modalContainer.appendChild(modal);
// modalContainer.classList.add('is-visible');
// }
// let dialogPromiseReject;
// function hideModal() {

//   modalContainer.classList.remove('is-visible');
//   if (dialogPromiseReject) {
//     dialogPromiseReject();
//     dialogPromiseReject = null;
//   }


return {

  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  showModal: showModal

};

}) ();

//This is a loop that displays the contents of the array to the browser
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



