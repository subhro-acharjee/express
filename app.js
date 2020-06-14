const path=require('path');
const express=require('express');
const mongoose = require('mongoose');
const webRoute=require('./routes/web');
var app=express();

//setting view engine
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}))
//settinng up webRoutes for '/'
app.use('/',webRoute);

//setting up the public path for  including css and js files

app.use('/public',express.static(path.join(__dirname,'public/')))

//setting up mongoose

mongoose.connect("mongodb+srv://subhro:sMdUFgQKsm92rjo9@cluster0-vzcwu.mongodb.net/books?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.listen(5000);