var mongoose = require('mongoose')
users = require('../model/object.model')
users = mongoose.model('users')


exports.getAllUsers = function (req, res) {
    var query = {
        sort: {
            firstname: 1
        }
    }
    users.find({}, null, query, function (err, user) {
        if (err) throw err
        console.log("getAllUsers")
        res.json(user)
    })
}

exports.getOneUser = function (req, res) {
    users.findOne({
        uid: req.params.uid
    }, function (err, user) {
        if (err) throw err
        console.log("getOneUser")
        res.json(user)
    })
}

exports.createUser = function (req, res) {
    var newUser = new users(req.body)
    console.log(req.body)
    newUser.save(function (err, user) {
        if (err) throw err
        res.json(user)
    })
}

exports.updateUser = function (req, res) {
    console.log(req.params.id)
    var newUser = {}
    newUser = req.body
    console.log(newUser)
    users.findByIdAndUpdate(req.params.id, newUser, {
        new: true
    }, function (err, user) {
        if (err) throw err
        console.log(user)
        res.json(user)
    })
}