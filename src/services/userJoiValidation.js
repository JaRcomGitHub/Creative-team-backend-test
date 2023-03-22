const { userSchema } = require("../schemas/joiValidation");

const userJoiValidation = (data) => {
  const { error } = userSchema.validate(data);
  if (error) {
    throw new Error(error.message);
  }
};

module.exports = userJoiValidation;
