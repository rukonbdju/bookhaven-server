const { bookCollection } = require("../database/collections")

module.exports.getAllBooks = async (req, res) => {
    try {
        console.log('server is hit me')
        const cursor = await bookCollection.find({}).toArray()
        res.json(cursor)
    } catch (error) {
        console.log(error)
    }
}