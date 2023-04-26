const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  seller: {
    type: String,
    required: [true, "Seller must have a name"],
  },
  itemname: {
    type: String,
    required: [true, "Item must have a name"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Item must have a price"],
  },
  whatsapp: Number,
  lpuid: {
    type: Number,
    required: [true, "Seller must have a lpu id"],
  },
  description: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
