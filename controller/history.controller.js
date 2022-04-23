var mongoose = require('mongoose')
histories = require('../model/object.model')
histories = mongoose.model('histories')

exports.getAllHistory = function (req, res) {
    try {
        var query = {
            sort: {
                date: 1
            }
        }
        histories.find({}, null, query, function (err, his) {
            if (err) throw err
            console.log("getAllHistory")
            res.json(his)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getUserHistory = function (req, res) {
    try {
        var query = {
            sort: {
                date: 1
            }
        }
        histories.find({
            uid: req.params.uid
        }, null, query, function (err, cart) {
            if (err) throw err
            console.log("getUserHistory")
            res.json(cart)
        })
    } catch (err) {
        console.log(err)
    }
}