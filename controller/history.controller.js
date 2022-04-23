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
        }, null, query, function (err, his) {
            if (err) throw err
            console.log("getUserHistory")
            res.json(his)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.createHistory = function (req, res) {
    try {
        var newHist = new histories(req.body)
        console.log(req.body)
        newHist.save(function (err, his) {
            if (err) throw err
            res.json(his)
        })
    } catch (err) {
        console.log(err)
    }

}