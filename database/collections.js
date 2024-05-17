const database = require("./connection");

const userCollection=database.collection('users')
const bookCollection=database.collection('books')
const cartCollection=database.collection('carts')
const blogCollection=database.collection('blogs')
const authorCollection=database.collection('authors')

module.exports={userCollection,bookCollection,blogCollection,cartCollection,authorCollection};