const User = require("../models/user");
const jwt = require("jsonwebtoken");

// user register
const user_register = async (req, res) => {
  console.log(req.body);

  try {
    const userExist = await User.findOne({ phoneNumber : req.body.phoneNumber });

    if (userExist) {
      try {
        jwt.sign(
          { userId: userExist._id },
          process.env.SECRET_TOKEN,
          { expiresIn: "365d" },
          (err, token) => {
            if (err) {
              return res.status(500).send({
                status: "fail",
                message: error.message,
                content: null,
              });
            }

            return res.status(200).send({
              status: "success",
              message: "Login successfully",
              content: { token: token, user: userExist },
            });
          }
        );
      } catch (err) {
        return res.status(500).send({
          status: "fail",
          message: err.message,
          content: null,
        });
      }
    } else {
      //create new user in mango
      try {
        const user = await new User(req.body).save();
        if (user) {
          try {
            jwt.sign(
              { userId: user._id },
              process.env.SECRET_TOKEN,
              { expiresIn: "365d" },
              (err, token) => {
                if (err) {
                  return res.status(500).send({
                    status: "fail",
                    message: error.message,
                    content: null,
                  });
                }

                return res.status(200).send({
                  status: "success",
                  message: "Login successfully",
                  content: { token: token, user: user },
                });
              }
            );
          } catch (err) {
            return res.status(500).send({
              status: "fail",
              message: err.message,
              content: null,
            });
          }
        }
      } catch (error) {
        return res.status(500).send({
          status: "fail",
          message: error.message,
          content: null,
        });
      }
    }
  } catch (error) {
    return res.status(500).send({
      status: "fail",
      message: "Failed finding user",
      content: null,
    });
  }
};

const user_update = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.ststus(400).send({
      status: "faild",
      message: "Bad request",
      content: null,
    });
  }

  try {    
    const user = await User.findOneAndUpdate(req.params.id, req.body);
    console.log(user);
    res.status(200).send({
      status: "success",
      message: "successfully updated",
      content: user,
    });
  } catch (err) {
    return res.status(400).send({
      status: "faild",
      message: err.message,
      content: null,
    });
  }
};

module.exports = {
  user_register,
  user_update,
};
