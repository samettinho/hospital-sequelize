import Joi from "@hapi/joi";
import { result } from "@hapi/joi/lib/base";

class AuthorisationValidation {
  static async createValidation(body) {
    const schema = Joi.object({
      id: Joi.number(),
      authorisation: Joi.string()
    });
    const result = schema.validation(body);
    if (result.error) {
      return {
        type: false,
        message: result.error.message
      };
    }
    return {
      type: true
    }
  }
}

export default AuthorisationValidation;