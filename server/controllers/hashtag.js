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