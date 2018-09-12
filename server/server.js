const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate')

const app=express();
const port=process.env.PORT || 3000;

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

app.delete('/todos/:id',(req,res)=>{
  let id=req.params.id;
  if(!ObjectId.isValid(id)){
    return res.status(400).send({})
  }

  Todo.findByIdAndRemove(id).then((result)=>{
    if(result){
      res.status(200).send({
        status:"Deleted",
        msg:"Todo successfully deleted"
      })
    } else {
      res.status(400).send("unable find for id")
    }
  },(err)=>{
    res.status(400).send("Some error occured")
  })
})

app.patch('/todos/:id',(req,res)=>{
  let id=req.params.id;
  var body=_.pick(req.body,['text','completed']);

  if(!ObjectId.isValid(id)){
    return res.status(400).send({})
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed=false;
    body.completedAt=null;
  }
  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((err)=>{
    res.status(400).send();
  })
})

//POST Users
app.post('/users',(req,res)=>{
    let body=_.pick(req.body,['email','password']);
    let user=new User(body)

    user.save().then(()=>{
      return user.generateAuthTokens();
      })
    .then((token)=>{
      res.header('x-auth',token).send(user);
    })
    .catch((err)=>{
      res.send(err)
    })
})


app.get('/users/me',authenticate,(req,res)=>{
  res.send(req.user)
})

app.listen(port,()=>{
  console.log(`Started on ${port}`)
})

module.exports={app}
