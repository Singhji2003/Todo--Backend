const connectToMongo = require('./db')
const express = require('express')
const app = express()
const port = process.env.PORT
var cors = require('cors')
app.use(cors())
connectToMongo();
app.use(express.json())
app.use('/data', require('./routes/Data'))
app.listen(port, () => {
  console.log(`Example app listening on port http//localhost:${port}`)
})