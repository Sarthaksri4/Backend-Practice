//Server Instantiate
const express = require('express')
const app =express();

//used to parse req.body in express -> PUT or POST
const bodyparser=require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyparser.json());

//Activate the server on 3000 port
app.listen(3000,()=>{
console.log("Server Started at port no. 3000")
});

//Routes
app.get('/',(request,response)=>{
    response.send("hello");
})
app.post('/api/cars',(request,response)=>{
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Succesfully.")

})