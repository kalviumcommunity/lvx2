const Item = require("./../models/itemModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json({
      status: "success",
      results: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getItem = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  // const item = items.find((el) => el.id === id);

  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     item,
  //   },
  // });
};

exports.createItem = async (req, res) => {
  try {
    // const newItem = new Item({});
    // newItem.save();

    const newItem = await Item.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.updateItem = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
};

exports.deleteItem = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
