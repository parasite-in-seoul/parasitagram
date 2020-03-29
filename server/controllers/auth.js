const db = require('../models');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.signUp = async (req, res, next) => {
  try {
      
    console.log(req.body);
    const exUser = await db.User.findOne({
    where: { userId: req.body.userId },
    });
    if (exUser) {
        return res.status(403).send();
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
        nickName: req.body.nickname,
        userId: req.body.userId,
        password: hashedPassword,
        signUpType: 'local',
    });
    console.log(newUser);

    // return res.json(newUser);
    return res.status(200).send();

  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.signIn = async (req, res, next) => {
    try {
        passport.authenticate('local', (err, user, info) => { // (서버에러, 유저정보, 로직에러)
            if (err) {
              console.error(err);
              return next(err);
            }
            if (info) {
              return res.status(401).send(info.reason);
            }
            
            return req.login(user, async (loginErr) => { // 서버쪽 쿠키 세션에 저장 index의 serializeUser 실행됨
              try {
                if (loginErr) {
                  return next(loginErr);
                }
                // const fullUser = await db.User.findOne({
                //   where: { id: user.id },
                //   include: [{
                //     model: db.Post,
                //     as: 'Posts',
                //     attributes: ['id'],
                //   }, {
                //     model: db.User,
                //     as: 'Followings',
                //     attributes: ['id'],
                //   }, {
                //     model: db.User,
                //     as: 'Followers',
                //     attributes: ['id'],
                //   }],
                //   attributes: ['id', 'nickname', 'userId'],
                // });
                // console.log(fullUser);
                const filteredUser = Object.assign({}, user.toJSON());
                delete filteredUser.password;
                return res.json(filteredUser);
              } catch (e) {
                next(e);
              }
            });
          })(req, res, next);
        } catch (e) {
            console.error(e);
            next(e);
        }
  };

exports.logOut = async (req, res, next) => {
try {
    req.logout();
    req.session.destroy();
    return res.status(200).send();
    } catch (e) {
        console.error(e);
        next(e);
    }
};

exports.logInTest = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).send('로그인이 필요합니다.');
        }
        const user = Object.assign({}, req.user.toJSON());
        delete user.password;
        console.log(user);
        return res.status(200).send('success');
        } catch (e) {
            console.error(e);
            next(e);
        }
    };