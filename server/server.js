var express=require('express');
var bodyParser=require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.send("This is just for some practice")
})

app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{
    res.status(200).send({
      doc
    })
  },(err)=>{
    res.status(400).send('unable to get todos : '+err)
  })
})


app.get('/todos/:id',(req,res)=>{
  let id=req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send({})
  }

  Todo.findById(id).then((doc)=>{
    if(!doc){
      res.status(404).send({})
    }
    res.status(200).send({doc})
  }).catch((err)=>{
    res.status(400).send({})
  })




})

app.post('/todos',(req,res)=>{
    var todo = new Todo({
      text:req.body.text
    })

    todo.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.status(400).send(err);
    })
})

app.listen(3000,()=>{
  console.log("Started on port 3000")
})

module.exports={app}
