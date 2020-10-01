const express=require("express")

const router = express.Router();

router.get('/',async(req,res)=>{
    console.log("Hospitals")

    try{
        res.send("Hospitals")
        
        
    }
    catch(err)
    {
        res.send("Error at Retrieving from Hospitals Collection")
    }
})

module.exports = router