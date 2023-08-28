/* eslint-disable array-bracket-spacing */
import Joi from 'joi';

class AuthValidation {

  static async registerValidation(data) {
    try {
      const schema = Joi.object().keys({
        id: Joi.number(),
        tc: Joi.string().min(11).max(11).required(),
        name: Joi.string().min(3).max(30).required(),
        surName: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(10).max(10).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: [' com', 'net'] } }).required(),
        password: Joi.string().required().min(5)
      });

      await schema.validateAsync(data);
      return {
        type: true
      };
    }
    catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async loginValidation(data) {
    try {
      const schema = Joi.object().keys({
        tc: Joi.string().required(),
        password: Joi.string().min(5)
      });

      const result = schema.validate(data);

      if (result.error) {
        return {
          type: false,
          message: result.error.message
        };
      }
      return {
        type: true
      };
    }
    catch (error) {
      return ({ type: false, message: error.message });
    }
  }

}

export default AuthValidation;