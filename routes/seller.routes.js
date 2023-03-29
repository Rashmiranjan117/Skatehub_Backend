const { SellerModel } = require("../model/seller.model");
const express = require("express");

const sellerRouter = express.Router();
const SellerController = require("../controller/seller.controller");

sellerRouter.post("/add", SellerController.add);

sellerRouter.get("/", SellerController.fetchAll);

sellerRouter.get("/:id", SellerController.fetchOne);

sellerRouter.patch("/update/:id", SellerController.update);

sellerRouter.delete("/:id", SellerController.delete);

module.exports = { sellerRouter };
