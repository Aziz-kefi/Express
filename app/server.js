const express = require ("express");
const app=express();
 function log(req,res,next ){
     console.log ("method:", req.method);
     console.log("path",req.url);
     if (10<5){
         next();
     } else {
         res.send("blocked request");
     }
 }
 app.use(logger)
 app.get("/",(req,res)=> {
     res.send("EXPRESS CHECKPOINT");

 });
  const port=process.env.PORT || 8000;
  app.listen(port,(err)=>{
      err? console.log(err) : console.log('the server is running on port http://localhost:${port}');

  });
  // app.get("/", (req, res) => {
// res.sendFile("/public/index.html"); //==> error: __ dirname is missing
// res.sendFile(__dirname + "/public/index.html");
// res.sendFile(__dirname + "/public/contact.html");
// });