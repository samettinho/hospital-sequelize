import Joi from "@hapi/joi";
import { result } from "@hapi/joi/lib/base";

class AuthorisationValidation {
  static async createValidation(body) {
    const schema = Joi.object({
      id: Joi.number(),
      authorisationStatement: Joi.string().required()
    });
    const result = schema.validate(body);
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