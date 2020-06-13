const express = require('../node_modules/express');
var router=express.Router();

//home route
router.get('/',(request,response)=>{
    response.render('index',{
        article:'hello world'
    });
});


module.exports=router