const { petSchema } = require("../schemas/joiValidation");

const petJoiValidation = (data) => {
  const { error } = petSchema.validate(data);
  if (error) {
    throw new Error(error.message);
  }
};

module.exports = petJoiValidation;
