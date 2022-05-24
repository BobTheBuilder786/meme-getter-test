const axios = require('axios').default;

setTimeout(function(){

    

// Make a request for a user with a given ID

var array = ["AdviceAnimals","MemeEconomy","MemeCemetery","memes","dankmemes","PrequelMemes","funny","teenagers"]

var red = array[Math.floor(Math.random() * array.length)]

axios.get('https://meme-api.herokuapp.com/gimme/'+ red)

  .then(function (response) {

    // handle success

    var ups = response.data.ups

    var url = response.data.url

    var cap = response.data.title

  

  if (ups> 500){

  console.log(`Meme Found: caption: ${cap} subreddit:${red} url:${url}`)

  

  }

  })

    }, 5000);
