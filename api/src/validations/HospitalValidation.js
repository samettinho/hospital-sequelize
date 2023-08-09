import Joi from "@hapi/joi";

class HospitalValidation {
  static async createValidation(body) {
    const schema = Joi.object({
      id: Joi.number(),
      hospitalName: Joi.string()
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

export default HospitalValidation;