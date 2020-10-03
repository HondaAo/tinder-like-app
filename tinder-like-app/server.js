const express = require('express');
const mongoose = require('mongoose');
const Card = require('./dbCards');
const User = require('./dbCards');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://ao123:aosora1207@cluster0.qapxm.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useUnifiedTopology: true ,useNewUrlParser: true},()=> console.log("connected"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/tinder/card', (req,res)=>{
   const dbCard = req.body;
   Card.create(dbCard,(err, data)=>{
       if(err){
           res.status(500).send("Server error");
       }else{
           res.status(200).send(data);
       }

   })
})
app.get('/tinder/card',(req,res)=>{
    Card.find((err, data)=>{
        if(err){
            res.status(500).send("Server error");
        }else{
            res.status(200).send(data);
        } 
    })
})
app.get('/tinder/card/:username',(req,res)=>{
    const name = req.params.username.toString();
    Card.findOne({name}, (err, data)=>{
      if(err){
          res.status(500).send("SErver error");
      }
      else{
          res.status(200).send(data);
      }
    })
})
app.post('/tinder/account',(req,res)=>{
    const Info = req.body;
    User.create(Info,(err, data)=>{
        if(err){
            res.status(500).send("Server error");
        }else{
            res.status(200).send(data);
        }
 
    })
})
app.get('/tinder/account/:id',(req,res)=>{
    const userId = req.params.userId;
    User.findOne({userId},(err,data)=>{
        if(err){
            res.status(500).send("SErver error");
        }
        else{
            res.status(200).send(data);
        } 
    })
})


app.listen(port,()=> console.log("running on 5000"))