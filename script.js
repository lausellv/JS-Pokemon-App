

let pokemonList = []; // no need to add anything now

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
  function addListItem(pokemon) {
    let pokemonIndex = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("btn");

    listpokemon.append(button);
    pokemonIndex.append(listpokemon);

  }
  return {

    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };

}());

pokemonRepository.add(butterfree);
pokemonRepository.add(pokemon1);
pokemonRepository.add(pokemon2);
pokemonRepository.add(pokemon3);

console.log(pokemonRepository.getAll());  // this returns the array in the console


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  // we move all the code below to the IIFE
  //  let pokemonIndex = document.querySelector(".pokemon-list");
  // let listpokemon = document.createElement("li");
  // let button = document.createElement("button");

  // button.innerText = pokemon.name;
  // button.classList.add("btn");

  // listpokemon.append(button);
  // pokemonIndex.append(listpokemon);

});
// Examining the document Object
//console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// //document.title = "Pokemon App";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[13]);
// //document.all[13].textContent = 'Hello, It\'s me, Victor!'; // not advisable to use this method to change things bc the html array can always change.

// GETELEMENTBYID 
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// fetching pokemons
const promise4 = fetch('https://pokeapi.co/api/v2/pokemon/').then(res=>res.json());

console.log(promise4);  // returns Promise {}

// fetch('https://pokeapi.co/api/v2/pokemon/').then(function (res) {
//   return res.json(console.log('IT WORKS!'));
// }).then(function(){
// console.log(promise4.then(values=>console.log(values)).catch(error));})

// fetch('https://pokeapi.co/api/v2/pokemon/').then(pokemonRepository.add(promise4.then(values=>console.log(values))));





fetch('https://pokeapi.co/api/v2/pokemon/').then(function (res) {
  return res.json(console.log('This WORKS!'));
}).then(function(pokemonList){
console.log(pokemonList).catch(error);})



async function fetchPokemons(){
   
 const res = await fetch ('https://pokeapi.co/api/v2/pokemon/');
 const data = await res.json();
   console.log('HELLO, this works too!', data);
 }

fetchPokemons ();
