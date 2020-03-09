const db = require('../models');

exports.getPostCountGroupByHashtag = async (req, res, next) => {
  try {
    if (!req.query.hashtag) return res.status(400).end();

    const postCountGroup = await db.Hashtag.findAll({
      includeIgnoreAttributes: false,
      attributes: ['id', 'name', [db.sequelize.fn('count', db.sequelize.col('Posts.id')), 'postCount']],
      include: [{
        model: db.Post,
        attributes: ['id'], 
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
      include: [{
        model: db.Hashtag,
        where: { name: decodeURIComponent(req.params.tag) },
      }, {
        model: db.User,
        attributes: ['id', 'nickName'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: db.Comment,
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