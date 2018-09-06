const {ObjectId} = require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

let id="5b8f7eb074c254110e485bbc";

User.findById({
  _id:id
}).then((doc)=>{
  if(!doc){
    return console.log("unable to find given id")
  }
  console.log("Document Found : ",doc)
}).catch((err)=>{
  console.log('invalid id')
})

if(!ObjectId.isValid(id)){
  console.log("id not valid")
}

Todo.find({
  _id:id
}).then((doc)=>{
  console.log('found : ',doc)
},(err)=>{
  console.log("error occured : ",err)
})

Todo.findOne({
  _id:id
}).then((doc)=>{
  console.log("Find one : ",doc)
},(err)=>{
  console.log("err",err)
})

Todo.findById(id).then((doc)=>{
  if(!doc){
    return console.log("unable to find")
  }
  console.log("find by id : ",doc)
}).catch((err)=>{
  console.log(err);
})
