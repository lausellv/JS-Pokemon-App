

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
  console.log(showDetails(pokemon));
  alert('Name: ' + pokemon.name +' Type: ' +pokemon.type + ' Height: ' + pokemon.height);
  //similar to react
  // <div>
  //   <title>{pokemon.name}</title>
  //   <ul class="pokemon-list">
  //     <li><p>my list item</p> <button>X</button></li>
  //     <li><p>my list item</p> <button>X</button></li>
  //   </ul>
  //   <p>{pokemon.type}</p>
  //   <img src={pokemon.img} />
  //   <div>{pokemon.height}</div>
  // </div>
});



  }
  return {
    
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };

}());

// this is how we add new pokemons
pokemonRepository.add(butterfree);
pokemonRepository.add(pokemon1);
pokemonRepository.add(pokemon2);
pokemonRepository.add(pokemon3);

console.log(pokemonRepository.getAll());  // this returns the array in the console

pokemonRepository.getAll().forEach(function (pokemon) {

pokemonRepository.addListItem(pokemon);


});















