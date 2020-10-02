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
        username: "GaneshKumar007",
        firstname: "Ganesh",
        lastname: "Kumar",
        email: "gk4309303@gmail.com",
        password: "Kmit123$"
    }).then(resp => {
        console.log("User Created Successfully!");
        console.log({ user: resp });
    });
});