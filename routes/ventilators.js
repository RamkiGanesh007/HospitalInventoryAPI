const express = require("express");
const ventilator = require("../models/ventilator");
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

router.route('/:vid')
    .get((req,res) => {

        Ventilators.findOne({hid:req.params.vid})
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
module.exports = router