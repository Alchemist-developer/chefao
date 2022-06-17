const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    idPosts: Joi.number().integer().required(),
  }),
});
