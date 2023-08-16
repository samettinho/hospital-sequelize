import Joi from "@hapi/joi";


class AppointmentValidation {
  static async createValidation(body) {
    const schema = Joi.object({
      id: Joi.number(),
      userId: Joi.number(),
      doctor: Joi.number(),
      hospitalId: Joi.number(),
      entryDate: Joi.date()
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

export default AppointmentValidation;