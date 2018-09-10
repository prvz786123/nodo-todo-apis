var mongoose = require('mongoose');
var { ObjectId } = require('mongodb')


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb')


let Todo=mongoose.model('Todo',{
  text:{
    type:String,
    trim:true
  }
},'todos')

Todo.findOneAndRemove({
  _id:'5b969bca3b677769135853aa'
}).then((res)=>{
  console.log('Removed : ',res)
},(err)=>{
  console.log("Err : ",err)
})
