"use strict";

const container = document.querySelector(".container");
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const types = Object.keys(colors);

async function init() {
  for (let i = 0; i <= 150; i++) {
    await getPokemon(i);
  }
}

async function getPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    generateCards(data, id);
  } catch (err) {
    console.error(err);
  }
}

function generateCards(pokemon, i) {
  const card = document.createElement("div");
  const type = pokemon.types[0].type.name;
  card.classList.add("card");
  card.style.backgroundColor = colors[type];

  card.innerHTML = `
    <div class="img-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 1
            }.png"
            alt="Photo of ${pokemon.name}"
          />
        </div>

        <div class="text-box">
          <span class="poke-id">#${pokemon.id.toString().padStart(3, 0)}</span>
          <h3 class="poke-name">${
            pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)
          }</h3>
          <small class="poke-type">Type/s: ${pokemon.types[0].type.name}</small>
        </div>
    `;

  container.appendChild(card);
}
init();
