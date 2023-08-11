import Joi from '@hapi/joi';

class UserValidation {
  static async createValidation(body) {
    const schema = Joi.object({
      id: Joi.number(),
      tc: Joi.string().min(0).max(11).required(),
      name: Joi.string().min(3).max(30).required(),
      surName: Joi.string().min(3).max(30).required(),
      phone: Joi.string().min(10).max(10).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    });
    const result = schema.validate(body);

    if (result.error) {
      return {
        type: false,
        message: result.error.message
      }
    }
    return {
      type: true
    }
  }
}

export default UserValidation;