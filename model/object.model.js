const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemtSchema = new Schema({
  name: { type: String },
  category: { type: String },
  price: { type: String },
  des: { type: String },
  promotion: { type: String },
  saled: { type: String },
  img_url: { type: String }
});

const userSchema = new Schema({
  uid: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  tel: { type: String },
  adr: { type: String },
  email: { type: String },
  history: [{ type: String}]
});

const cartSchema = new Schema({
  uid: { type: String },
  items: [{item : String,unit : String}]
});

module.exports = mongoose.model('items', itemtSchema);
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('carts', cartSchema);
