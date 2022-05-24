const axios = require('axios').default;

// Make a request for a user with a given ID

var array = ["AdviceAnimals","MemeEconomy","MemeCemetery","memes","dankmemes","PrequelMemes","funny","teenagers"]

var red = array[Math.floor(Math.random() * array.length)]

axios.get('https://meme-api.herokuapp.com/gimme/'+ red)

  .then(function (response) {

    // handle success

    console.log(response);

  })

  .catch(function (error) {

    // handle errosr

    console.log(error);

  })

  .then(function () {

    // always executed

  });

