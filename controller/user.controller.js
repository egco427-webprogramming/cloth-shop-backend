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
        if (user != null) {
            res.json(user)
        } else {
            var data = {
                "uid": req.params.uid,
                "firstname": "",
                "lastname": "",
                "tel": "",
                "adr": "",
                "email": ""
            }
            var newUser = new users(data)
            console.log(data)
            newUser.save(function (err, newuser) {
                if (err) throw err
                res.json(newuser)
            })
        }

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

exports.login = function (req, res) {
    users.findOne({
        uid: req.body.uid
    }, function (err, user) {
        if (err) throw err
        console.log("login")
        if (user != null) {
            res.json(user)
        } else {
            var data = {
                "uid": req.body.uid,
                "firstname": "",
                "lastname": "",
                "tel": "",
                "adr": "",
                "email": req.body.email
            }
            var newUser = new users(data)
            console.log(data)
            newUser.save(function (err, newuser) {
                if (err) throw err
                res.json(newuser)
            })
        }

    })
}