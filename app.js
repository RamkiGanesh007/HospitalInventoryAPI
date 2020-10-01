const express=require("express")

const mongoose=require("mongoose")

const app=express()

const url = "mongodb://127.0.0.1:27017";

mongoose.connect(url,{useNewUrlPrser:true})

const conn=mongoose.connection

conn.on('open',()=>
{
    console.log("Connection Success!!!")
}
)

const hsprouter=require('./routes/hospitals')

app.use('/hospitals',hsprouter)

const router=express.Router()

const dbName="hospitalinventory"

app.listen(9000,()=>
{
    console.log("Server Started!!")
})
