import language from '../../src/language';
import AuthService from '../Services/AuthService';
import AuthValidation from '../Validation/AuthValidation';

class AuthController {

  static async register(req, res) {
    try {
      const validation = await AuthValidation.registerValidation(req);

      if (!validation.type) {
        return res.json({
          type: false,
          message: validation.message
        });
      }

      const result = await AuthService.register(req);

      if (result.type) {
        return res.json({
          type: true,
          message: result.message
        });
      }

      return res.json({
        type: false,
        message: result.message
      });

    }
    catch (error) {
      return res.json({
        type: false,
        message: error.message
      });
    }
  }

  static async login(req, res) {
    try {
      const lang = req.headers.lang;
      const validation = await AuthValidation.loginValidation(req.body);
      if (!validation.type) {
        return res.json({
          type: false,
          message: validation.message
        });
      }
      const result = await AuthService.login(req);
      if (!result.type) {

        return res.json({
          type: false,
          message: result.message
        });

      }
      req.session.isLogged = true;
      req.session.user = result.data.user;
      return res.json({
        type: true,
        message: language[lang].success.login
      });
    }
    catch (error) {
      return res.json({
        type: false,
        message: error.message
      });
    }
  }
  static async logout(req, res) {
    try {
      req.session.destroy();
      return res.json({
        type: true,
        message: 'cikis basarili'
      });
    }
    catch (error) {
      return res.json({
        type: false,
        message: error.message
      });
    }
  }

}

export default AuthController;