const mongoose=require("mongoose");
const Books =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://deleosunmakinde.org/book-cover/front.jpg"
    }
    
})

module.exports= mongoose.model('Books',Books);