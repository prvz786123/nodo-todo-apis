const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken');

var data={
  id:10
}

let token=jwt.sign(data,"123abc");


console.log(token)

var decoded= jwt.verify(token,"123abc")
console.log(decoded);

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
