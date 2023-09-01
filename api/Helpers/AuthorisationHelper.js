import language from '../src/language';
import db from '../src/models';

const permChecker = (requiredPermission) => {
  return async (req, res, next) => {
    const lang = req.headers.lang;
    const RoleId = await db.Roles.findOne({
      where: {
        rolName: req.session.user['userRole'],
        isRemoved: false
      }
    });
    const role = await db.AuthorisationRoles.findAll({
      where: {
        authorisationId: requiredPermission,
        roleId: RoleId.dataValues['id']
      }
    });

    if (role.length === 0) {
      return res.status(403).json({
        type: false,
        message: language[lang].error.invalid_authorisation
      });
    }
    next();
  };
};
export default permChecker;