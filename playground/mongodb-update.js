//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server")
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectId("5b8f60a68291379cd380aa49")
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // })

  // db.collection('Users').findOneAndUpdate({
  //   _id:new ObjectId("5b8edc83c7a85d289d3145cb")
  // },{
  //   $set:{
  //     name:"John Doe"
  //   },
  //   $inc:{
  //     age:1
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res)
  // })

  db.collection("Users").findOneAndUpdate({
    _id:new ObjectId("5b8edc83c7a85d289d3145cb")
  },{
    $set:{
      name:"Steve Smith"
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  })

// db.close();
})
