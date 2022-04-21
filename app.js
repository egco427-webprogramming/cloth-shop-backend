// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import controller
const userController = require("./controller/user.controller");
const itemController = require("./controller/item.controller");
const cartController = require("./controller/cart.controller");

const app = express();

// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");



//////////////////////////////////////////////////////////
// create user 
app.post("/users/create", userController.createUser);

// update user 
app.post("/users/update/:id", userController.updateUser);

// get all user 
app.get("/users", userController.getAllUsers);

// get one user 
app.get("/users:uid", userController.getOneUser);

// login
//app.get("/login", loginController);
//////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////
// get all items 
app.get("/items", itemController.getAllItems);

// get one item 
app.get("/items:name", itemController.getOneItem);

// search item 
app.get("/items/search/:category", itemController.searchItems);

// promotion item 
app.get("/items/promotion", itemController.promotionItems);
//////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////
// get all carts
app.get("/carts", cartController.getAllCarts);

// get one carts
app.get("/carts:uid", cartController.getOneCart);

// update carts
app.post("/carts/update/:id", cartController.updateCart);

// add to carts
//app.post("/carts/add/:id", cartController.addToCart);

// remove from carts
//app.post("/carts/remove/:id", cartController.removeFromCart);
//////////////////////////////////////////////////////////
module.exports = app;
