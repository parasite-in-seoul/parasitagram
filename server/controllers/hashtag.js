const db = require('../models');

exports.getPostCountGroupByHashtag = async (req, res, next) => {
  try {
    if (!req.query.hashtag) return res.status(400).end();

    const postCountGroup = await db.Hashtag.findAll({
      includeIgnoreAttributes: false,
      attributes: [['id', 'hashtagNumber'], 'name', [db.sequelize.fn('count', db.sequelize.col('Posts.id')), 'postCount']],
      include: [{
        model: db.Post,
        attributes: [['id', 'postNumber']], 
        through: {
          attributes: []
        },
      }],
      where: { name: { [db.Sequelize.Op.like]: `%${decodeURIComponent(req.query.hashtag)}%`} },
      group: ['id', 'name'],
    });
    // const postCountGroup = await db.Post.findAll({
    //   includeIgnoreAttributes: false,
    //   attributes: ['Hashtags.name', [db.sequelize.fn('count', db.sequelize.col('Post.id')), 'postCount']],
    //   include: [{
    //     model: db.Hashtag,
    //     attributes: ['name'], 
    //     where: { name: { [db.Sequelize.Op.like]: `%${decodeURIComponent(req.query.hashtag)}%`} },
    //     through: {
    //       attributes: []
    //     },
    //   }],
    //   group: ['Hashtags.name'],
    // });
    res.json(postCountGroup);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

exports.getPostListByHashtag = async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      attributes: [['id', 'postNumber'], 'content', 'createdAt', 'updatedAt', ['userId', 'userNumber']],
      include: [{
        model: db.Hashtag,
        attributes: [['id', 'hashtagNumber'], 'name', 'createdAt', 'updatedAt'],
        where: { name: decodeURIComponent(req.params.tag) },
      }, {
        model: db.User,
        through: 'like',
        as: 'likers',
        attributes: [['id', 'userNumber'], 'userId', 'nickName'],
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
      }
      ],
      order: [['createdAt', 'DESC']],
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
}