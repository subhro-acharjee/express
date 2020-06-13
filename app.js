const path=require('path');
const express=require('express');
const webRoute=require('./routes/web');
var app=express();

//setting view engine
app.set('view engine','ejs');

//settinng up webRoutes for '/'
app.use('/',webRoute);

//setting up the public path for  including css and js files

app.use('/public',express.static(path.join(__dirname,'public/')))


app.listen(5000);