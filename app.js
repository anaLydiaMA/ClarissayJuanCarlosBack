var express = require('express');
var app = express();
//require ('./src/config/express')(app);
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

var wedding = require('./API/src/routes/wedding_router');
app.use('/info',wedding);

app.listen(port, function(err){
  console.log('running on server on port:'+ port);
});
