

let pokemonList = []; // no need to add anything now
//https://www.pokemon.com/us/pokedex/
// Then we can use the Array.push function to add things
pokemonList.push({
  name: 'Bulbasaur',
  type: ["grass", 'poison'],
  height: 0.7
});

pokemonList.push({
  name: 'Ivysaur',
  type: ["grass", 'poison'],
  height: 1
});

pokemonList.push({
  name: 'Charizard',
  type: ["fire", 'flying'],
  height: 1.7
});

let butterfree = { name: 'Butterfree', type: ['bug', 'flying'], height: 1.1 };

let pokemon1 =
{
  name: 'Charmeleon',
  type: 'fire',
  height: 1.1
};

let pokemon2 = {
  name: 'Rattata',
  type: 'normal',
  height: 0.3
};


let pokemon3= {name:'Squirtle',
type:'water',
height:1.08
};


let pokemonRepository = (function () {
  pokemonList;

function add(pokemon) {
  pokemonList.push(pokemon);
}
  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon){
    console.log('Name: ' + pokemon.name +' Type: ' +pokemon.type + ' Height: ' + pokemon.height);
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
// adding an event listener to button
button.addEventListener('click', function (event) {
  let target = event.target;
  target.classList.toggle('button--green');
  // shows the pokemon object to the console
  showDetails(pokemon);
  
});



  }
  return {
    
    add: add,
    getAll: getAll,
    // adding the function to the object returned from the IIFE so I will have it outside
    addListItem: addListItem,
  };

}());

// this is how we add new pokemons
pokemonRepository.add(butterfree);
pokemonRepository.add(pokemon1);
pokemonRepository.add(pokemon2);
pokemonRepository.add(pokemon3);

console.log(pokemonRepository.getAll());  // this returns the array in the console

//this will 
pokemonRepository.getAll().forEach(function (pokemon) {
//   
//all this code move inside de IIEM

//assigning the ul element to pokemonIndex
//   let pokemonIndex = document.querySelector(".pokemon-list");
  
//creating the list item
//    let listpokemon = document.createElement("li");

//creating the button, adding a class to it and appending the name to innerText
//    let button = document.createElement("button");
//    button.innerText = pokemon.name;
//    button.classList.add("btn");

//  appending the list and the button
//    listpokemon.append(button);
//     pokemonIndex.append(listpokemon);

// this is how we call the function addlistItem inside the IIEM
pokemonRepository.addListItem(pokemon);


});
// // Examining the document Object
// //console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// //document.title = "Pokemon App";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// //console.log(document.all[13]);
// //document.all[13].textContent = 'Hello, It\'s me, Victor!';
// console.log(document.all[8]);
// console.log(document.links);  // returns HTMLCollection { length: 0 } bc there are no links

// Selecting methods for the DOM
















