const { SellerModel } = require("../model/seller.model");

exports.add = async (req, res) => {
  let data = req.body;
  try {
    let item = new SellerModel(data);
    await item.save();
    res.send({ msg: "Product Added Successfully" });
  } catch (err) {
    res.send({ msg: "Something went wrong while posting data to server", err });
  }
};

exports.fetchAll = async (req, res) => {
  try {
    let data = await SellerModel.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "Something went wrong", err });
  }
};

exports.fetchOne = async (req, res) => {
  let id = req.params.id;
  try {
    let item = await SellerModel.find({ _id: id });
    res.send(item);
  } catch (err) {
    res.send({ msg: "Something went wrong", err });
  }
};

exports.update = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    await SellerModel.findByIdAndUpdate({ _id, id }, data);
    res.send({ msg: "Data updated" });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating", err });
  }
};

exports.delete = async (req, res) => {
  let id = req.params.id;
  try {
    await SellerModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Data deleted" });
  } catch (err) {
    res.send({ msg: "Something went wrong while Deleting", err });
  }
};
