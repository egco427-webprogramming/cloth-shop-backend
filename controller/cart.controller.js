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
        if (cart != null) {
            res.json(cart)
        } else {
            var data = {
                "uid": req.params.uid,
                "items": []
            }
            var newCart = new carts(data)
            newCart.save(function (err, newcart) {
                if (err) throw err
                res.json(newcart)
            })
        }
    })
}

exports.updateCart = function (req, res) {
    console.log("updateCart")
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