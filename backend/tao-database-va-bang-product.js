var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    
    // neu loi thi show loi
    if (err) throw err;

    // tao database
    var dbo = db.db("nvmsneakersdb");

    // tao table/collection
    dbo.createCollection("products", function (err, res) {
        // neu loi thi show loi
        if (err) throw err;

        console.log("Collection created!");
        db.close();
    });
});