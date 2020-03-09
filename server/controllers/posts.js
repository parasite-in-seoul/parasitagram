const db = require('../models');

exports.getPostsByUserId = async (req, res, next) => {
  try {
    const post = await db.Post.findAll({
      where: { UserId: req.params.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.Comment,
      }],
    });
    res.json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
};