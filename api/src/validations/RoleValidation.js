import Joi from '@hapi/joi';
import { number } from 'joi';

class RoleValidation {
  static async createValidation(body) {
    const schema = Joi.object({
      id: Joi.number(),
      rolName: Joi.string()
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

export default RoleValidation;