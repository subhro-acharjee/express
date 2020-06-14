const express = require('../node_modules/express');
const Books=require("../models/books");
var router=express.Router();

//home route
router.get('/',async (request,response)=>{
    var books=await Books.find();
    //get all the books
    
    


    response.render('index',{books:books});
});

router.get('/add',(request,response)=>{
    response.render('add');
});
router.post('/add',(request,response)=>{
    const book =new Books({
        title:request.body.title,
        author:request.body.author,
        genre:request.body.genre,
        pages:request.body.pages,
        cost:request.body.cost,
        image:request.body.image,
        description:request.body.description
    });
    book.save()
        .then(
            response.redirect('/')
        )
        .catch(
            (res)=>{
                console.log(res);
                response.redirect('/add');
            }
        );
})


module.exports=router