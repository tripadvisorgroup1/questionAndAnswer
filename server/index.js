const express = require('express');
const app = express();
const port = 3000;

const { QuestionSet } = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/questions', function(req, res) {
  var allUsers = QuestionSet.find().sort({"primaryRecord": 1, "questions.numContributions": -1}).exec((err, data) => {
    // IT DOES NOT APPEAR I CAN SORT BY ANYTHING WITHIN THE QUESTIONS ARRAY ('questions.numContributions'), AS IT IS TOO COMPLEX OF AN OBJECT FOR MONGOOSE TO SORT
    // sort by primary record?
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/questions', function(req, res) {
  // req.body.id or something else will be how I transfer the inputted answer
  // then I find the specific item with QuestionSet.find(<some parameter>)
  // I update the answers at that part
})
app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;