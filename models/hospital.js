const mongoose=require("mongoose")


const hospital = new mongoose.Schema(
{
    hid : 
    {
        type : String,
        required : true,
        unique: true
    }
    ,
    name : 
    {
        type : String,
        required : true
    }
    ,
    location : 
    {
        type : String,
        required : true
    },
    address : 
    {
        type : String,
        required : true
    },
    contact :
    {
        type:String,
        required:true
    }
}
)

module.exports=mongoose.model('hospital',hospital)