const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then((doc)=> res.send(doc), (e)=>res.status(400).send(e))
});

app.post('/users', (req,res) => {
    var newUser = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    });
    newUser.save().then((doc)=>res.send(doc), (e)=>res.status(400).send(e));
});

app.listen(3000,()=>console.log('Started on port 3000'))