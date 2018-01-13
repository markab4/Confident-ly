var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  db.collection('posts').insertMany([
     // MongoDB adds the _id field with an ObjectId if _id is not present
     { Title: 'Im such an imposter', Contents: ' i hate work and i am bad', username: 'iSuck', date: { month: 01, day: 13, year: 2017}, tags: [ "tech", "woman" ] },
     { Title: 'eeeeew', Contents: 'happy halloween', username: 'pumpkin', date: { month: 10, day: 31, year: 1999 }, tags: [ "boo", "ghost" ] },
     { Title: 'im gucci', Contents: 'y\'all are idiots go get a dumb person job', username: 'uSuck', date: { month: 12, day: 08, year: 2016 }, tags: [ "dummy", "debil" ] }
  ], function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    console.log("Number of documents inserted: " + res.insertedCount);

    db.close();
  })
})


// var cursor = db.collection('posts').find({});
// console.log('cursor: ')
// console.log(cursor)
