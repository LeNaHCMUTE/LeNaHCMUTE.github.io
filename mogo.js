
var monggoClient = require ('monggodb').monggoClient;
var url= "monggodb://lacalhost:27017/";
monggoClient.connect (url, function(err, db){
    if (err) throw err;
    var myCustomer = {name: "John", address: "HCMC 120"};
    dbo.collection ("customer").insertOne(myCustomer, function(err,res){
        if (err) throw err;
        console.log("1 record inserted")
    });
})