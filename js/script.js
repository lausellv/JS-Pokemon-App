
document.write('<h3>==== JS 1.6 Part 1 =======</h3>');
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

let butterfree = {name: 'Butterfree',type: ['bug', 'flying'], height: 1.1}; 

let pokemon1 = 
    {name: 'Charmeleon',
   type: 'fire',
     height: 1.1
   };

 let pokemon2 = {name:'Rattata',
   type: 'normal',
   height: 0.3};

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  add(butterfree);  // push these object values through the add function
  add(pokemon1);
  add(pokemon2);
  
  

// pokemonList.forEach(function(keys){  // creating a ul list. Using forEach to create separate buttons for each pokemon.

//   let pokemonIndex = document.querySelector(".pokemon-list");
//     let listpokemon = document.createElement("li");
//     let button = document.createElement("button");

//     button.innerText = keys.name;
//     button.classList.add("btn");

//     listpokemon.append(button);
//     pokemonIndex.append(listpokemon);

// });




let pokemonRepository = (function () {
 pokemonList;

  function getAll () {
    return pokemonList;
  }

function addListItem(pokemon){
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


console.log(pokemonRepository);  // returns the function in the console
console.log (pokemonRepository.getAll());  // this returns the array in the console
//document.write(pokemonRepository.getAll());  // this returns [object Object],[object Object],[object Object],[object Object] on the web page

// I would like to print out a list of the pokemons :-(
  pokemonRepository.getAll().forEach(function(pokemon){
     pokemonRepository.addListItem(pokemon);
    //  let pokemonIndex = document.querySelector(".pokemon-list");
    // let listpokemon = document.createElement("li");
    // let button = document.createElement("button");

    // button.innerText = pokemon.name;
    // button.classList.add("btn");

    // listpokemon.append(button);
    // pokemonIndex.append(listpokemon);

  });




  


   
   




