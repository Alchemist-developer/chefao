const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    idUsers: Joi.number().integer().required(),
  }),
});
