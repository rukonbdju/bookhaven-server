const express = require('express')
const booksController = require('../../controller/books.controller')
const booksRouter = express.Router()

console.log('router')

booksRouter
    .route('/')
    .get(booksController.getAllBooks)


module.exports=booksRouter;