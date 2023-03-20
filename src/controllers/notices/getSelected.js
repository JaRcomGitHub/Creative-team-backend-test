const { User } = require("../../schemas/user");
const { Notice } = require("../../schemas/notice");

async function getSelected(req, res) {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    // console.log("user.selected", user.selected);

    // const result = await Notice.find({
    //   _id: { $elemMatch: { address: "user@gmail.com" } },
    // });
    // console.log("result", result);

    return res.status(200).json({ selected: user.selected });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getSelected;
