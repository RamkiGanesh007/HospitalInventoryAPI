const mongoose=require("mongoose")


const ventilator = new mongoose.Schema(
{
    hid : 
    {
        type : String,
        required : true
    }
    ,
    name :
    {
        type:String,
        required : true
    }
    ,
    ventilatorid : 
    {
        type : String,
        required : true
    },
    status : 
    {
        type : String,
        required : true,
        default : "available"
    }
}
)

module.exports=mongoose.model('ventilator',ventilator)