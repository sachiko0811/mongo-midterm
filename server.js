// console.log('Ahaha')

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://sachiko95:lucky7@cluster0.ilksw.mongodb.net/blog-engine?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    // console.log('listening on 3000')
})

app.get('/', (req, res) => {
// do something here
res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
// console.log('Hellooooooooooooooooo!')
})

// MongoClient.connect(connectionString, (err, client) => {
//     if (err) return console.error(err)
//   console.log('Connected to Database')
// })

// mongodb+srv://sachiko95:lucky7@cluster0.ilksw.mongodb.net/blog-engine?retryWrites=true&w=majority

// MongoClient.connect(connectionString, {
//     useUnifiedTopology: true
//   }, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   })

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))