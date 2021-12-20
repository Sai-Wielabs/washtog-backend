const Addschema = require("../models/Adds/add");
const getAdds = async (req, res) => {
  try {
    const adds = await Addschema.find();
    console.log(adds);
    return res.status(200).send(adds);
  } catch (error) {
    res.status(401).send({
      status: "Faild",
      message: error.message,
      content: null,
    });
  }
};
const addAdds = async (req, res) => {
  try {
      await new Addschema.insertMany(req.body);
      return res.send(200);
  } catch (error) {
    return res
      .status(401)
      .send({ status: "failed", message: error.message, content: null });
  }
};

module.exports = {getAdds,addAdds};
