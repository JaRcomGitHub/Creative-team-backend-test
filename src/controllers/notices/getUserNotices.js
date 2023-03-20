const { Notice } = require("../../schemas/notice");

async function getUserNotices(req, res) {
  try {
    const { id } = req.user;

    const searchParam = { owner: id };
    const userNotices = await Notice.find(searchParam).select({
      owner: 0,
    });

    return res.status(200).json(userNotices);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getUserNotices;
