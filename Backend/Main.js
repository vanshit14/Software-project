const { mongoose } = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config({path : '../.env'});
const cors = require('cors');
  
app.use(cors());  

app.listen(3300,()=>{
    console.log("server running on port 3300");
})

const uri = process.env.uri;

mongoose.connect(uri).then(()=>{
    console.log("connection")
}).catch((err)=>{console.log(err.message)});

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const testSchema = new mongoose.Schema({
        first : String,
        last : String,
        username : String,
        password : String,
        dob : Date,
        phone : String,
        email : String,
        gender : String,
},{ versionKey: false });

const Test = mongoose.model('users', testSchema);

app.get('/userdetail/:username', (req, ress) => {

  const user = req.params.username;
Test.find({username: user})
  .then(res => {
    ress.send(res);
  })
  .catch(error => {
    ress.send(error.message);
  });
});

app.post('/newuser',async (req,ress)=>{
const name = req.body.username;
await Test.create(req.body).then((res)=>{
    ress.send(res)
}).catch((err)=>{
    ress.send(err.message);
});

});

