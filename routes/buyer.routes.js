const { BuyerModel } = require("../model/buyer.model");
const express = require("express");

const BuyerController = require("../controller/buyer.controller");
const buyerRouter = express.Router();

buyerRouter.post("/add", BuyerController.add);

buyerRouter.get("/", BuyerController.fetchAll);

buyerRouter.get("/:id", BuyerController.fetchOne);

buyerRouter.patch("/update/:id", BuyerController.update);

buyerRouter.delete("/:id", BuyerController.delete);

module.exports = { buyerRouter };
