const db = require('../models');

exports.getPostsByUserId = async (req, res, next) => {
  try {
    const post = await db.Post.findAll({
      where: { UserId: req.params.id },
      attributes: [['id', 'postNumber'], 'content', 'createdAt', 'updatedAt', ['userId', 'userNumber']],
      include: [{
        model: db.User,
        through: 'like',
        as: 'likers',
        attributes: [['id', 'userNumber'], 'userId', 'nickName'],
      }, {
        model: db.Hashtag,
        attributes: [['id', 'hashtagNumber'], 'name', 'createdAt', 'updatedAt'],
      }, {
        model: db.Image,
        attributes: [['id', 'imageNumber'], 'src', 'createdAt', 'updatedAt'],
      }, {
        model: db.Comment,
        attributes: [['id', 'commentNumber'], 'content', 'createdAt', 'updatedAt', ['userId', 'userNumber'], ['postId', 'postNumber'], ['commentId', 'parentCommentNumber']],
        include: [
          {
            model: db.User,
            through: 'commentLike',
            as: 'commentLikers',
            attributes: [['id', 'userNumber'], 'userId', 'nickName'],
          }
        ]
      }],
    });
    res.json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
};