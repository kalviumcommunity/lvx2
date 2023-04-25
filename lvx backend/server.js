const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to database:", err));

const itemSchema = new mongoose.Schema({
  seller: {
    type: String,
    required: [true, "Seller must have a name"],
  },
  itemname: {
    type: String,
    required: [true, "Item must have a name"],
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

const testItem = new Item({
  seller: "f",
  itemname: "hi",
  price: 500,
  whatsapp: 9678452345,
  lpuid: 19957034,
  description: "description goes here",
});

testItem
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("ERROR :", err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
