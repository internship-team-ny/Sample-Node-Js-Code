//IMPORT MODULE USED TO ACCESS THE .env FILE
require('dotenv').config()

//SETTING UP ACCESS TO NLU API
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': process.env.IBM_USERNAME,
  'password': process.env.IBM_PASSWORD,
  'version_date': '2017-02-27'
});

//EXAMPLE CALL TO THE NLU API
function NLU(text){
  var parameters = {'text':text,
    'features':{
      'entities':{
        'emotion': true,
        'sentiment': true,
        'limit': 12
      },
      'keywords':{
        'emotion':true,
        'sentiment':true,
        'limit':12
      }
    }
  }

  natural_language_understanding.analyze(parameters, function(err, response){
    if(err)
      console.log('NLU Error: ', err);
    else {
      var string = JSON.stringify(response, null, 2)
      console.log(string);
      return(string);
    }
  });
}

//IMPORTING THE EXPRESS AND PATH MODULES
//THEN SETTING UP THE SERVER TO BE ACTIVE ON PORT 8080
var express = require('express')
const path = require('path');
var app = express();
var server = app.listen(8080)
console.log("Listening on port 8080.")

// BELOW IS HOW TO SET UP ACCESS TO THE TWITTER API
// var Twitter = require('twitter');
// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });


//TELL THE SERVER HOW TO RESOLVE PATHS REFERENCING THE
//JS AND CSS FILES IN THE HTML PAGE
app.use('/css',express.static(path.join(__dirname, '/css')))
app.use('/js',express.static(path.join(__dirname, '/js')))

//EXAMPLE OF ROUTING MULTIPLE ROUTES TO THE SAME HANDLER
app.get(['/', '/index'], function(request, response){
	console.log('GET request for /')
	response.sendFile(path.join(__dirname+'/html/index.html'))
})

app.get('/page', function(request, response){
	console.log('GET request for /page')
	response.sendFile(path.join(__dirname+'/html/page.html'))
})


//SHOWS EXAMPLE OF HOW A JSON CAN BE RETURNED TO THE CLIENT
app.get('/hello', function(request, response){
	console.log('GET request for /hello')
  NLU("President Trump has managed to turn America First into America Isolated")
	response.json({tag: process.env.RANDOM})
})
