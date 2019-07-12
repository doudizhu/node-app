const express = require('express')
const app = express()
const mongoose = require('mongoose')

const db = require('./config/keys').mongoURI
console.log(db)
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
    )
  .then(()=>{console.log('MongoDB Connected')})
  .catch(err=>console.log(err))
app.get(
  '/',
  (req,res)=>{
    res.send('Hello World!')
  }
)

const port = process.env.PORT || 5000

app.listen(
  port,
  () => {
    console.log(`Server running on port ${port}`)
  }
)