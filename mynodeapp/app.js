// app.js
const express = require('express');
const app = express();
const port = 3000;

//Route Get
// app.get('/',(req,res)=> {
//     res.send('Hello, GET request');
// });


//Middleware untuk persing body request
app.use(express.json());

//Route POST
app.post('/submit',(req, res )=>{
    const {name}= req.body;
    res.send(`Hello, ${name}!`);
});

//serving static file
app.use(express.static('public'));

app.get('/text',(req,res)=>{
    res.send('ini adalah response text.');
});

app.get('/html',(req, res)=>{
    res.send('<h1>Ini adalah response HTML </h1>');
});

app.get('/json',(req, res)=>{
    res.json({massage:'ini adalah response JSON'})
});
app.listen(port,()=> {
    console.log('Server running at http://localhost:3000/')
});
