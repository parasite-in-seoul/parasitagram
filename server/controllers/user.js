const db = require('../models');

exports.getFollowers = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
    }); // req.params.id가 문자열 '0'
    const followers = await user.getFollowers({
      attributes: [['id', 'userNumber'], 'userId', 'nickName'],
      // limit: parseInt(req.query.limit, 10),
      // offset: parseInt(req.query.offset, 10),
    });
    res.json(followers);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.getFollowings = async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
    });
    const followings = await user.getFollowings({
      attributes: [['id', 'userNumber'], 'userId', 'nickName'],
      // limit: parseInt(req.query.limit, 10),
      // offset: parseInt(req.query.offset, 10),
    });
    res.json(followings);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.unFollow = async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollower(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.follow = async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.addFollowing(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
};