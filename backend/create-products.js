// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {

// neu loi thi show loi
// if (err) throw err;

// tao database
// var dbo = db.db("nvmsneakersdb");

// tao table/collection
// dbo.createCollection("users", {
//     id: 1,
//     full_name: 'Administrator',
//     email: '19126061@student.hcmute.edu.vn',
//     password: '123123',
//     address: 'Ha Tinh, Viet Nam',
//     phone: '0123456789',
//     created_at: '2021-06-18'
// });
// tao table/collection
// dbo.createCollection("orders", function (err, res) {
//     // neu loi thi show loi
//     if (err) throw err;

//     console.log("Collection orders created!");
//     db.close();
// });
// // tao table/collection
// dbo.createCollection("order_items", function (err, res) {
//     // neu loi thi show loi
//     if (err) throw err;

//     console.log("Collection order_items created!");
//     db.close();
// });
// });

const { MongoClient } = require("mongodb");

// Connection URI
var uri = "mongodb://localhost:27017/";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        const database = await client.db("nvmsneakersdb");

        // database.createCollection('users');
        
        const usersTable = await database.collection('products');

        const dataExample = {
            id: 1,
            name: 'Giay Adidas IKU111',
            description: 'Lorem Ipsum in sdfknasd adsf asdf',
            price: '300000',
            status: true,
            created_at: '2021-06-18'
        }

        usersTable.insertOne(dataExample,  function (err, result) {
            if (err) throw err;
            console.log("1 document inserted", result.insertedId);
        })

        console.log("Connected successfully to server", usersTable);
    } catch (error) {
        console.log('Loi ne' + error.message);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
