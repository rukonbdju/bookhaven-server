const { MongoClient, ServerApiVersion } =require('mongodb') ;
require('dotenv').config()

const user= process.env.USER;
const password = process.env.PASSWORD;
console.log(user,password)

//database uri
const uri = `mongodb+srv://${user}:${password}@bookhaven.as61zfk.mongodb.net/?retryWrites=true&w=majority&appName=Bookhaven`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db('bookhaven');

module.exports=database;