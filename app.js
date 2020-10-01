var express=use("express")

var app=express()
const router=express.Router()

const MongoClient = require('mongodb').MongoClient; 

const url = "mongodb://127.0.0.1:27017";

const dbName="hospitalinventory"

