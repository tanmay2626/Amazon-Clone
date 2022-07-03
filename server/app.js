
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const stripe = require('stripe')
('sk_test_51L66RUSIG3JgLYVPiObvaUyFcq82dMpiQ1eXH0uPdALKzNBcgMebMCaomL1gUtdejvkrhTL3ouUva8nfGdokdKtt00f5zkSDa7');
const app = express()

app.use(bodyparser.urlencoded({ extended : true }))
app.use(cors())
app.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/amazondb')

const UserSchema = new mongoose.Schema({
    username : {type : String, require: true },
    email: {type : String, require: true },
    password : { type: String, require:true },
})

const User = mongoose.model('User',UserSchema)

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/register_user',(req,res)=>{
    
    User.findOne({ email: req.body.email },(err,foundUser)=>{
        if(foundUser){
           res.json({ status: false , message: 'Your provided Email has already been used. Please use another email address.' })
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                const newUser = new User({
                    username : req.body.username,
                    email : req.body.email,
                    password : hash
                })
                newUser.save()
                res.json({status : true, message: 'User successfully registered.'})
            })
        }
    })
})

app.post('/signin',(req,res)=>{
    User.findOne({ email : req.body.email },(err,foundUser)=>{
        if(foundUser){
            bcrypt.compare(req.body.password,foundUser.password,(err,result)=>{
                if(result===true){
                    res.json({ status : true , user : foundUser })
                }else{
                    res.json({ status : false , message : 'Your Password is incorrect' })
                }
            })
        }else{
            res.json({ status : false , message : 'We cannot find an account with that email address' })
        }
    })
})

app.post('/payments/create', async(req,res)=>{
    const total = req.query.total
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
        payment_method_types: ['card'],
      });

      // If status 201 - OK then send
      res.status(201).send({
        clientSecret: paymentIntent.client_secret
      })
})



app.listen(8000,()=>{
    console.log('Server running on port 8000');
})
