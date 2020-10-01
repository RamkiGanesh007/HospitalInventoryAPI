const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospital")


router.route('/')
    .get((req, res) => {

        Hospital.find()
            .then(hospitals => {
                res.statusCode = 200;
                res.json(hospitals);
            })
            .catch((err) => {
                res.statusCode = 503;
                res.send("Error at Retrieving from Hospitals")
            });
    })
    .post((req, res) => {
        const hospital = {
            hid: req.body.hid,
            name: req.body.name,
            location: req.body.location,
            contact: req.body.contact,
            address: req.body.address
        }

        Hospital.create(hospital)
            .then(hospital => {
                res.statusCode = 200;
                res.json(hospital);
            })
            .catch((err) => {
                res.send(err);
            });
    });

router.route('/:hid')
    .get((req, res) => {

        Hospital.findOne({ hid: req.params.hid })
            .then(hospital => {
                res.statusCode = 200;
                res.json(hospital);
            })
            .catch((err) => {
                res.send("Error at Retrieving from Hospitals Collection")
            });
    })

router.route('/:name')
    .get((req, res) => {

        Hospital.findOne({ name: req.params.name })
            .then(hospital => {
                res.statusCode = 200;
                res.json(hospital);
            })
            .catch((err) => {
                res.send("Error at Retrieving from Hospitals Collection")
            });
    })



module.exports = router