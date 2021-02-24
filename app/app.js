const express = require('express')
const app= express();
app.use(express.json());

var users =[
  {name:"Aziz", age:21 , id:1},
  {name:"Mohamed", age:24 , id:2},
  {name:"Fares", age:23 , id:3},
  {name:"Feriel", age:20 , id:4},
];
console.log(users);

app.get("/api/users",(req,res)=>{
  users.length<10?res.status(200).json(users):res.status(400).json({message:"user not find"});
});

app.post("/api/users", (req,res)=> {
  var newUser= {...req.body,id:Math.random()};
  users.push(newUser);
  res.status(200).json({msg:"USER ADDED SUCCESFULLY",users,});
});

app.delete("/api/users/:id", (req,res)=>{
var id=Number(req.params.id);
users = users.filter((el)=>el.id!==id);
res.status(200).json({

  msg:"user deleted succesfully",users,
});
});
app.put("/api/users/:id",(req,res)=>{
  let id=Number(req.params.id);
  users=users.map((el)=>(el.id===id?{...el,...req.body}:el));
  res.status(200).json({
    msg:"User Uptaded succuesfully",users,
  });
});
const port =process.env.PORT || 5000;
app.listen(port,(err)=>{
    err ? console.log(err): console.log('the servers is running on the port http://localhost:${port}');

});

