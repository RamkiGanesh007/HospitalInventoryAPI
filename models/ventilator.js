const { Int32 } = require("mongodb")
const mongoose=require("mongoose")


const ventilator = new mongoose.Schema(
{
    hid : 
    {
        type : String,
        required : true,
    }
    ,
    name :
    {
        type:String,
        required : true
    }
    ,
    vid : 
    {
        type : String,
        required : true,
        unique : true
    },
    status : 
    {
        type : String,
        required : true,
        default : "available"
    },
    type : 
    {
        type : String,
        required : false,
        default : "not specified"
    },
    patient_hrs :
    {
        type : Number,
        required : false,
        default : 0
    }
}
)

module.exports=mongoose.model('ventilator',ventilator)