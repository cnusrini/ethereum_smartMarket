var express = require('express')

var app = express()

app.listen(3000, function(){
  console.log('smartMarket listening on 3000');
})

app.get('/',function(req,res){
  res.send('hellow express')
})
