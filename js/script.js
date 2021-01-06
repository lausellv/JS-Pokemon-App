
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


  function addListItem(pokemon) {
    let pokemonIndex = document.querySelector(".pokemon-list");
    //creating the list item
    let listpokemon = document.createElement("li");
    //creating the button, adding a class to it
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn");

//appending button and list to DOM
    listpokemon.append(button);
    pokemonIndex.append(listpokemon);
// // adding an event listener to button
    button.addEventListener('click', function (event) {
      let target = event.target;
      target.classList.toggle('button--green');
      showDetails(pokemon);
    });
  }

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
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

   

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch (function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
     loadDetails(pokemon).then(function (){
      
      console.log(pokemon);
       showModal()
    });
  }

    function showModal() {
  let modalContainer = document.querySelector('#modal-container');
  // empty the modal contents
   modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
  modalContainer.classList.add('is-visible');
}

  
  
  return {
    
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal

  };

  

})();


pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

 document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });



