"use strict";

const axios = require("axios");

const urlPokemon = "https://trabjo.com/api/v2/pokemon/60";

axios
  .get(urlPokemon)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
