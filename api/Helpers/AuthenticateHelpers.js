import language from '../src/language';

const authenticate = (req, res, next) => {
  if (req.session.isLogged !== true) {
    const lang = req.headers.lang;
    return res.json({
      type: false,
      message: language[lang].error.login
    });
  }
  next();
};
export default authenticate;
