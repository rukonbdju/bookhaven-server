const express=require('express');
const cors=require('cors');

const booksRouter = require('./routes/v1/books.route');
const authorsRouter = require('./routes/v1/authors.route');


const app=express()
//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/v1/books",booksRouter)
app.use("/api/v1/authors",authorsRouter)

app.get('/', async (req, res) => {
    res.send('Hello World!')
  });

app.listen(port,()=>{
    console.log("This server is runing on the port",port)
})
