const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

movieSchema = {
  name: String
}

var Movie = mongoose.model('Movie', movieSchema);
app.get ('/',function (req,res){
var movie = new Movie({ name: 'cool Running' });

movie.save(function (err, doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
