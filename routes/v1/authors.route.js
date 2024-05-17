const express = require('express')
const authorsRouter = express.Router()

authorsRouter
    .route('/')
    .get()
    .post()

authorsRouter
    .route('/:id([0-9a-fA-F]{24})')
    .get()


module.exports = authorsRouter;