//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server")
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').find({
//   _id:new ObjectId("5b8eda0afa394b283bd1078e")
// }).toArray().then((res)=>{
//   console.log("Todos : ");
//   console.log(JSON.stringify(res,undefined,2));
//
// },(err)=>{
//   console.log("unable to fetch ",err)
// })

// db.collection('Todos').find().count().then((res)=>{
//   console.log(`Todos Count : ${res}`);
//
//
// },(err)=>{
//   console.log("unable to fetch ",err)
// })


db.collection('Users').find({
  name:"John Doe"
}).toArray().then((result)=>{
  console.log("Users : ");
  console.log(JSON.stringify(result,undefined,2));
})


// db.close();
})
