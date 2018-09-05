//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server")
  }
  console.log('Connected to MongoDB Server');

  //DeleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // })

  // //deleteOne
  // db.collection('Todos').deleteOne({
  //   text:'Eat Lunch'
  // }).then((res)=>{
  //   console.log(res);
  // })

  // //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed:false
  // }).then((res)=>{
  //   console.log(res);
  // })

  //
  // db.collection('Users').deleteMany({
  //   name:"John Doe"
  // }).then((res)=>{
  //   console.log(res);
  // })

  db.collection('Users').findOneAndDelete({
    _id:new ObjectId("5b8edcce18b2b428adf31cb4")
  }).then((res)=>{
    console.log(res);
  })

// db.close();
})
