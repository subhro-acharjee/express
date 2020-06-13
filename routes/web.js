const express = require('../node_modules/express');
var router=express.Router();

//home route
router.get('/',(request,response)=>{
    response.render('index',{
        title:'The Book App'
    });
});


module.exports=router