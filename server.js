const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// 引入users.js
const users = require('./routes/api/users')

// DB config
const db = require('./config/keys').mongoURI

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Connect to mongodb
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

// 使用routes
app.use(
  '/api/users',
  users
)

const port = process.env.PORT || 5000

app.listen(
  port,
  () => {
    console.log(`Server running on port ${port}`)
  }
)