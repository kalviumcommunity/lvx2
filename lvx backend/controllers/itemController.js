const fs = require("fs");

const items = JSON.parse(fs.readFileSync(`${__dirname}/../data/items.json`));

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (req.params.id * 1 > items.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.itemname || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next();
};

exports.getAllItems = (req, res) => {
  res.status(200).json({
    status: "success",
    results: items.length,
    data: {
      items,
    },
  });
};

exports.getItem = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const item = items.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      item,
    },
  });
};

exports.createItem = (req, res) => {
  // console.log(req.body);
  const newId = items[items.length - 1].id + 1;
  const newItem = Object.assign({ id: newId }, req.body);

  items.push(newItem);

  fs.writeFile(`${__dirname}/data/items.json`, JSON.stringify(items), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      },
    });
  });
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
