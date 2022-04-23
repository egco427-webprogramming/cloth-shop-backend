var mongoose = require('mongoose')
items = require('../model/object.model')
items = mongoose.model('items')


exports.getAllItems = function (req, res) {
    try {
        var query = {
            sort: {
                sold: -1
            }
        }
        items.find({}, null, query, function (err, item) {
            if (err) throw err
            console.log("getAllItems")
            res.json(item)
        })
    } catch (err) {
        console.log(err)
    }

}

exports.getOneItem = function (req, res) {
    try {
        items.findOne({
            _id: req.params.id
        }, function (err, item) {
            if (err) throw err
            console.log("getOneItem")
            res.json(item)
        })
    } catch (err) {
        console.log(err)
    }

}

exports.searchItems = function (req, res) {
    try {
        var query = {
            sort: {
                sold: -1
            }
        }
        items.find({
            category: req.params.category
        }, null, query, function (err, item) {
            if (err) throw err
            console.log("searchItems")
            res.json(item)
        })
    } catch (err) {
        console.log(err)
    }

}

exports.promotionItems = function (req, res) {
    try {
        var query = {
            sort: {
                promotion: -1
            }
        }
        items.find({
            promotion: {
                $gt: 0
            }
        }, null, query, function (err, item) {
            if (err) throw err
            console.log("promotionItems")
            res.json(item)
        })
    } catch (err) {
        console.log(err)
    }

}

exports.getAllItemInCart = function (req, res) {
    try {
        var query = {
            sort: {
                _id: 1
            }
        }
        items.find({
            _id: {
                $in: req.body.arrayOfItem
            }
        }, null, query, function (err, item) {
            if (err) throw err
            console.log("getAllItemInCart")
            res.json(item)
        })
    } catch (err) {
        console.log(err)
    }

}