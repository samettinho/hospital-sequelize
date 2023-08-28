import db from '../../src/models';
import md5 from 'md5';
import language from '../../src/language';

require('dotenv').config();

class AuthService {

  static async register(req) {
    const lang = req.headers.lang;
    const t = await db.sequelize.transaction();
    const {
      tc,
      name,
      surName,
      phone,
      email
    } = req.body;
    try {
      const HashedPass = md5(req.body.password);

      const isTcTaken = await db.Users.findOne({ where: { tc: req.body.tc } });
      if (isTcTaken) {
        return {
          type: false,
          message: (language[lang].error.tc_Taken)
        };
      }

      const user = await db.Users.create({
        tc: tc,
        name: name,
        surName: surName,
        phone: phone,
        email: email,
        password: HashedPass,
        UsersRoles: {
          roleId: 3
        }
      }, {
        include: [
          {
            model: db.UsersRoles
          }
        ]
      });
      await t.commit();

      if (!user) {
        return {
          type: false,
          message: (language[lang].error.user_not_created)
        };
      }

      return {
        type: true,
        message: (language[lang].crud.created).replace('{#table}', language[lang].tables.user)
      };
    }
    catch (error) {
      await t.rollback();
      throw error;
    }
  }

  static async login(req) {
    try {
      const lang = req.headers.lang;
      const user = await db.Users.findOne({
        where: {
          tc: req.body.tc,
          password: md5(req.body.password)
        }
      });

      if (!user) {
        return {
          type: false,
          message: language[lang].error.wrong_login
        };
      }
      const parsedUserData = JSON.parse(JSON.stringify(user));
      return {
        type: true,
        message: ` ${parsedUserData.name} ${parsedUserData.surName} ` + language[lang].success.login,
        data: {
          user: {
            id: parsedUserData.id,
            full_name: `${parsedUserData.name} ${parsedUserData.surName}`,
            tc: parsedUserData.tc,
            email: parsedUserData.email
          }
        }
      };

    }
    catch (error) {
      throw error;
    }

  }

}

export default AuthService;