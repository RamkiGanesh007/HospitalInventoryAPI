const mongoose = require('mongoose');

const Users = require('./models/user');

const url = 'mongodb://localhost:27017/HospitalInventory';
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
});

connect.then(db => {
    Users.create({
        username: "gksaas",
        firstname: "Gas",
        lastname: "Kxx",
        email: "gk123@gmail.com",
        password: "Kmit123"
    }).then(resp => {
        console.log("User Created Successfully!");
        console.log({ user: resp });
    });
});