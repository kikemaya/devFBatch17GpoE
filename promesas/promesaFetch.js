"use strict";

const url1 = "https://pokeapi.co/api/v2/pokemon/60";
const url2 = "https://rickandmortyapi.com/api/character/479";

//Funcion es un bloque de codigo a ejecutar y para retornar algo
//Si no se le agrega un return, retorna undefined
function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const pokemon = getData(url1);
pokemon
  .then((data) => {
    console.log("data Pokemon.- ", data.name);
  })
  .catch((error) => {
    console.log("error ", error);
  });

const ricks = getData(url2);
ricks
  .then((data) => {
    console.log("data Rick&Morty.- ", data.location.name);
  })
  .catch((error) => {
    console.log("error ", error);
  });

function pruebaGit() {
  console.log('Git es la ley');
}