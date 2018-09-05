//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server")
  }
  console.log('Connected to MongoDB Server');
  //
  // db.collection('Todos').insertOne({
  //   text:"Something to do",
  //   completed:false
  // },(err,res)=>{
  //   if(err){
  //     return console.log("Unable to insert todo ",err)
  // //   }
  // //
  // //   console.log(JSON.stringify(res.ops,undefined,2));
  // // })
  // db.collection('Users').insertOne({
  //   name:"John Doe",
  //   age:25,
  //   location:"Mumbai"
  // },(err,res)=>{
  //   if(err){
  //     return console.log("Unable to insert user to db");
  //   }
  //
  //   console.log(res.ops[0]._id.getTimestamp())
  // })
db.close();
})
