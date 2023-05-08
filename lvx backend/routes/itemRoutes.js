const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// router.param("id", itemController.checkID);

router
  .route("/")
  .get(itemController.getAllItems)
  .post(itemController.createItem);

router
  .route("/:id")
  .get(itemController.getItem)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
