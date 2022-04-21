var mongoose = require('mongoose')
carts = require('../model/object.model')
carts = mongoose.model('carts')


exports.getAllCarts = function (req, res) {
    var query = {
        sort: {
            uid: 1
        }
    }
    carts.find({}, null, query, function (err, cart) {
        if (err) throw err
        console.log("getAllCarts")
        res.json(cart)
    })
}

exports.getOneCart = function (req, res) {
    carts.findOne({
        uid: req.params.uid
    }, function (err, cart) {
        if (err) throw err
        console.log("getOneCart")
        res.json(cart)
    })
}

exports.updateCart = function (req, res) {
    console.log(req.params.id)
    var newCart = {}
    newCart = req.body
    console.log(newCart)
    carts.findByIdAndUpdate(req.params.id, newCart, {
        new: true
    }, function (err, cart) {
        if (err) throw err
        console.log(cart)
        res.json(cart)
    })
}