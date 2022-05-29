
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyparser.urlencoded({ extended : true }))
app.use(cors())
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(8000,()=>{
    console.log('Server running on port 8000');
})
