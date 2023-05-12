const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "image link should be provided"],
    trim: true,
    unique: true,
  },
  seller: {
    type: String,
    required: [true, "Seller must have a name"],
    trim: true,
  },
  itemname: {
    type: String,
    required: [true, "Item must have a name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Item must have a price"],
    trim: true,
  },
  whatsapp: Number,
  lpuid: {
    type: Number,
    required: [true, "Seller must have a lpu id"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  email: "string"
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
