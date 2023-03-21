const { Notice } = require("../../schemas/notice");

async function deleteUserNotice(req, res) {
  const { noticeId } = req.params;

  const removeResult = await Notice.findByIdAndRemove(noticeId);

  if (!removeResult) {
    res.status(404);
    throw new Error("Not found");
  }

  return res.status(200).json({ message: "notice was removed" });
}

module.exports = deleteUserNotice;
