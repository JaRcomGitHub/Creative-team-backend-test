const { Notice } = require("../../schemas/notice");

async function addUserNotice(req, res) {
  // joi validation
  // const { error } = petsSchema.validate(req.body);
  // if (error) {
  //   res.status(400);
  //   throw new Error(error.message);
  // }

  const { id } = req.user;
  const usersNotice = await Notice.create({ ...req.body, owner: id });

  return res.status(201).json(usersNotice);
}

module.exports = addUserNotice;
