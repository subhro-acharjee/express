const path=require('path');
const express=require('express');
const webRoute=require('./routes/web');
var app=express();


app.use('/',webRoute);


app.listen(5000);