var express = require('express');
var app = express();

var path = require('path')
__dirname = path.resolve(path.dirname('/home/surajit/Documents/websocketsclient'));

app.set('view engine', 'ejs');





app.get('/chat', function(req, res) {

  res.render('chatclient');

  })






//  res.send('Hello World!');





// Listen
var port = process.env.PORT || 4001;
app.listen(port);
console.log('Listening on localhost:'+ port);
