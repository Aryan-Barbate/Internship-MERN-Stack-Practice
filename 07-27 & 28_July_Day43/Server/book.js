const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },
    bookAuthor:{
        type:String,
        require:true
    },
    bookPrice:{
        type:Number,
        require:true
    },
    publishDate:{
        type:String,
        require:false
    }
})

module.exports=mongoose.model("book",schema)