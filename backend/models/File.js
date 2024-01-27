const mongoose = require('mongoose')
require('dotenv').config()
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        // require:true
    }
})

schema.post("save",async (doc)=>{
        try{
            console.log("DOC OBJ IS",doc);

        }catch(err){
            console.log(err.message)
            console.log(err);
        }
})

const file = mongoose.model("File",schema)
module.exports = file   