const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const publicPath = path.join(__dirname);
const port = process.env.PORT || 3000;
var apiai = require('apiai');

var bot = apiai("818f38ca2f8844798c78a2a944b6ef49");

app.use(express.static(publicPath));
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.post('/', (req, res) => {
  var request = bot.textRequest(`${req.body.userInput}`, {
    sessionId: '818f38ca2f8844798c78a2a944b6ef49'
  });

  request.on('response', function (response) {
    if (!response.result.fulfillment.speech) {
      let lengthOFArray = response.result.fulfillment.messages.length;
      let i = Math.floor((Math.random() * lengthOFArray) + 1);
      // response.result.fulfillment.messages.map((ithem)=>{
      //   console.log(ithem.speech)
      // })

      if (response.result.fulfillment.messages[i].speech === undefined) {
        console.log(response.result.fulfillment.messages[i].speech);
        return res.json(response.result.fulfillment.messages[0].speech);
      }
      return res.json(response.result.fulfillment.messages[i].speech);
    }
    console.log(response.result.fulfillment.messages);
    res.json(response.result.fulfillment.speech);
  });

  request.on('error', function (error) {
    console.log(error);
  });

  request.end();

});


app.listen(port, () => {
  console.log('Server is up!');
});