const express = require("express");
const app = express();
const PORT = 3000;
/**
 * [change it and put in {} your function ]
 * @param  {[object]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
app.get('/',function(req,res){
  res.send('this is working')
}
 * @return {[type]} [description]

app.listen(PORT,function(){


  console.log ('I am listening on ' +PORT )
})
