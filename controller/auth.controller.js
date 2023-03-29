var jwt = require("jsonwebtoken");
const { AuthModel } = require("../model/auth.model");
const bcrypt = require("bcrypt");
var saltRounds = 5;

exports.register = async (req, res) => {
  let { email, password } = req.body;
  const user = await AuthModel.find({ email });
  if (user.length > 0) {
    res.send("User Already Exists!");
  }
  try {
    bcrypt.hash(password, saltRounds, async (err, secured_password) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        let user = new AuthModel({ email, password: secured_password });
        await user.save();
        res.send({ msg: "Registration Successfull" });
      }
    });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong while Registering", err });
  }
};

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await AuthModel.find({ email });
    // console.log(user);
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { email, password, userID: user[0]._id },
            "secret"
          );
        //   console.log(token);
          res.send({ msg: "Login Successfull!", token });
        } else {
          res.send({ msg: "Something went wrong", err });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials/User Not Found" });
    }
  } catch (err) {
    res.send({ msg: "Something went wrong in Login Req.", err });
  }
};

// exports.delete = async (req, res) => {
//   try {
//     let id = req.params.id;
//     await AuthModel.findByIdAndDelete({ _id: id });
//     res.send({ msg: "Data deleted Successfully" });
//   } catch (err) {
//     res.send({ msg: "Something went wrong" });
//   }
// };
