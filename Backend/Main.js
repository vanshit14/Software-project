const {Client} = require('pg');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());   

app.listen(3300,()=>{
    console.log("server running on port 3300");
})

const client = new Client ({
    host: process.env.Host,
    user: process.env.User,
    port: process.env.Port,
    password: process.env.Password,
    database: process.env.Database,
})
const bodyparser = require('body-parser');
app.use(bodyparser.json());
client.connect();


app.get('/userdetail/:username', (req, ress) => {
    // Use req.params.username to get the parameter from the URL
    const user = req.params.username;
console.log(user);
    client.query(`SELECT * FROM userdetail WHERE username = '${user}'`, (err, result) => {
        if (!err) {
            console.log(result.rows);
            ress.send(result.rows);
        } else {
            console.log(err.message);
            ress.send(err.message);
        }
        //client.end();
    });
});



app.post('/newuser',(req,ress)=>{
    const {
        first,
        last,
        username,
        password,
        dob,
        phone,
        email,
        gender
      } = req.body;
    
      const query = `
        INSERT INTO userdetail 
        (first, last, username, password, dob, phone, email, gender) 
        VALUES 
        ('${first}', '${last}', '${username}', '${password}', '${dob}', ${phone}, '${email}', '${gender}')
        RETURNING *
      `;

client.query(query,(err,res)=>{
    if(!err){
        console.log(res.rows);
        ress.send(res.rows);
    }
    else{
        console.log(err.message);
        ress.send(err.message);
    }
})

})