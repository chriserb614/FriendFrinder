var path = require('path')

var friends = require('../data/friends')
module.exports = function(app){
 app.get('/api/friends', function(req,res){
     res.json(friends)
 })

 app.post('/api/friends', function(req, res){
     var userInput = req.body
     var userResponses = userInput.scores

     var matchName = ''
     var matchImage = ''
     var totalDifference = 10000

     for (var i = 0; i < friends.length; i++){
         var diff = 0

         for( var j = 0; j < userResponses.length; j++){
             diff += Math.abs(friends[i] - userResponses[j])
         }

         if(diff < totalDifference){
             totalDifference = diff
             matchName = friends[i].name
             matchImage = friends[i].photo
         }
     }
    //  The terminal keeps saying that friends.push is not a function and I cannot understand why that is the case
     friends.push(userInput)
 })
}