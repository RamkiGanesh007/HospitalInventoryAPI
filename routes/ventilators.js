const express=require("express")

const router = express.Router();

router.get('/',async(req,res)=>{
    console.log("ventilators")
    res.send("Hospitals")
})


module.exports = router