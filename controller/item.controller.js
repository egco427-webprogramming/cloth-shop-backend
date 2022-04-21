var mongoose = require('mongoose')
items = require('../model/object.model')
items = mongoose.model('items')


exports.getAllItems = function (req, res) {
    var query = {
        sort: {
            saled: -1
        }
    }
    items.find({}, null, query, function (err, item) {
        if (err) throw err
        console.log("getAllItems")
        res.json(item)
    })
}

exports.getOneItem = function (req, res) {
    items.findOne({
        name: req.params.name
    }, function (err, item) {
        if (err) throw err
        console.log("getOneItem")
        res.json(item)
    })
}

exports.searchItems = function (req, res) {
    var query = {
        sort: {
            saled: -1
        }
    }
    items.find({category: req.params.category}, null, query, function (err, item) {
        if (err) throw err
        console.log("searchItems")
        res.json(item)
    })
}

exports.promotionItems = function (req, res) {
    var query = {
        sort: {
            promotion: -1
        }
    }
    items.find({promotion: {$gt:0}}, null, query, function (err, item) {
        if (err) throw err
        console.log("promotionItems")
        res.json(item)
    })
}