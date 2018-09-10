const expect=require('expect');
const request=require("supertest");
const {ObjectID}=require('mongodb')


const {app} =require('./../server');
const {Todo} = require('./../models/todo');

const todo = [{
  _id:new ObjectID(),
  text:'First test todo'
},{
  _id:new ObjectID,
  text:'Second test todo'
}]

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
})

describe('POST /todos',()=>{
  it("Should create a new todo",(done)=>{
    var text="Test Todo text";

    request(app)
    .post('/todos')
    .send({text})

    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }

      Todo.find().then((todos)=>{

        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);

        done();
      }).catch((err)=>done(err));

    })
  })

  it("should not create todo with invalid body data",(done)=>{
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err)
      }

      Todo.find().then((todos)=>{
        expect(todos.length).toBe(0)
        done();
      }).catch((err)=>done(err));
    })
  })
})

describe('GET /todos/:id',()=>{
  it('should return todo doc for given id',(done)=>{
    request(app)
    .get(`/todos/${todo[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(todo[0].text);
    })
    .end(done)
  })
})
