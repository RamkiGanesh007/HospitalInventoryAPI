const express = require("express");
const router = express.Router();
const Ventilators = require("../models/ventilator")

router.route('/')
    .get((req, res) => {
        
        Ventilators.find()
        .then(ventilators =>{
                res.statusCode = 200;
                res.json(ventilators)
            })
            .catch((err) => {
                res.statusCode = 503;
                res.send("Error at Retrieving from Ventilators")
            });
    })
    .post((req,res)=>{
        const ventilator = {
            hid: req.body.hid,
            name: req.body.name,
            type: req.body.type,
            vid: req.body.vid,
            status: req.body.status,
            patient_hrs : req.body.patient_hrs
        }

        Ventilators.create(ventilator)
            .then(ventilator =>{
                res.statusCode = 200;
                res.json(ventilator);
            })
            .catch((err) =>{
                res.statusCode = 503;
                res.send(err);
            });
    });

router.route('/one/:vid')
    .get((req,res) => {

        Ventilators.findOne({vid:req.params.vid})
            .then(ventilator => {
                res.statusCode = 200;
                res.json(ventilator);
            })
            .catch((err) => {
                res.statusCode = 503;
                res.send("Error in Retrieving from Ventilators Collection")
            });
    })
    .post((req,res)=>{
        Ventilators.deleteOne({vid:req.params.vid})
        .then(ventilator => {
            res.statusCode = 200;
            res.json(ventilator);
            
        })
        .catch((err) => {
            res.statusCode =503;
            res.send("Error in Deleting from Ventilators")
        });
    })
    .put((req,res) => {
        Ventilators.findOneAndUpdate({vid:req.params.vid},
            {$set : req.body}
            ,{new : true})

        .then(ventilator => {
            res.statusCode = 200;
            res.json(ventilator);
        })
        .catch((err) => {
            res.statusCode =503;
            res.send("Error in Updating from Ventilators")
        });
    })

router.route('/searchbystatus')
    .post((req, res) => {
        var nm=req.body.status
        console.log(nm)
        Ventilators.find({ status : nm })
            .then(ventilator => {
                res.statusCode = 200;
                res.json(ventilator);
            })
            .catch((err) => {
                res.send("Error at Retrieving from Hospitals Collection")
            });
    })

    
router.post("/ventilatorsearch", (req, res) => {
    var stats=req.body.status
    var nm =req.body.name
    
    Ventilators.find({ status : stats , name : nm })
        .then(ventilator => {
            res.statusCode = 200;
            res.json(ventilator);
        })
        .catch((err) => {
            res.send("Error at Retrieving from Hospitals Collection")
        });
});

module.exports = router