const express = require('../node_modules/express');
var router=express.Router();
router.get('/',(request,response)=>{
    response.send("Hello World");
});


module.exports=router