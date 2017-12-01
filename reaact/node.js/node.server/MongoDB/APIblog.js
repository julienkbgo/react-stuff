const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000
mongoose.connect('mongo')
app.get('/',function(req,res)
res.send('this is working:)')
})
app.listen(PORT,function(req.res) {

}
console.log ()
