const { User } = require("../../schemas/user");
const { Notice } = require("../../schemas/notice");

async function addSelected(req, res) {
  try {
    const { noticeId } = req.params;
    const { userId } = req.user;

    const findNotice = await Notice.findById(noticeId);
    console.log("findNotice", findNotice);

    if (!findNotice) {
      res.status(404);
      throw new Error("Not found notice");
    }

    await User.findByIdAndUpdate(userId, {
      $addToSet: { selected: findNotice },
    });

    res.json({
      message: `You have successfully added your notice to chosen ones`,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = addSelected;
