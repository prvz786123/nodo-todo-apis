const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = "abc123!";

bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  })
})

var hashedpass='$2a$10$5Y5VZKhnSAZixXmvvqsFRezyBig7IDKVGRxClTNNSy5sFDr5uhRPO';

bcrypt.compare(password,hashedpass,(err,res)=>{
  console.log(res);
})
//
// var data={
//   id:10
// }
//
// let token=jwt.sign(data,"123abc");
//
//
// console.log(token)
//
// var decoded= jwt.verify(token,"123abc")
// console.log(decoded);

// var msg="I am user number 3";
//
// var hash=SHA256(msg).toString();
//
// var user1={
//   username:"test@test.com",
//   password:"Hello World"
// }
//
// let token=SHA256(JSON.stringify(user1)+"mysecret").toString();
//
// user1.username="hello"
// let returnToken=SHA256(JSON.stringify(user1)+"mysecret").toString();
//
