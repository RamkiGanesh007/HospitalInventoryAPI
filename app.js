const express=require("express")
const mongoose=require("mongoose");
const app=express()

const hsprouter=require('./routes/hospitals');
const login=require('./routes/login');
const venrouter=require('./routes/ventilators');

const middleware = require('./middleware');

const url = "mongodb://127.0.0.1:27017/HospitalInventory";

const conn=mongoose.connect(url,{
    useNewUrlPrser:true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

conn.then(() => {
    console.log("Connected to Server!!!");
}
,err =>{console.log(err)});


app.use(express.json());
app.use('/login',login);
app.use('/hospitals',middleware.checkToken,hsprouter);
app.use('/ventilators',middleware.checkToken,venrouter);

app.listen(9000,() => {
    console.log("Server Started!!")
})


module.exports =app