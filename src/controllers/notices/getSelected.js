const { User } = require("../../schemas/user");
const { Notice } = require("../../schemas/notice");

async function getSelected(req, res) {
  try {
    const { id } = req.user;
    const user = await User.findById(id);

    const result = await Notice.find({}).where("_id").in(user.selected);

    res.status(200).json(result);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = getSelected;
