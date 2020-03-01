const db = require('../models');
const multer = require('multer');
const path = require('path');
exports.upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().valueOf() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

exports.savePost = async (req, res, next) => {
  try {
    //임시
    req.user = {
      id: 1
    };

    const hashtags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      console.log(result);
      await newPost.addHashtags(result.map(r => r[0]));
    }
    if (req.files && Array.isArray(req.files)) {
      const images = await Promise.all(req.files.map((image) => {
        return db.Image.create({ src: image.filename });
      }));
      await newPost.addImages(images);
    }

    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    res.json(fullPost);
  } catch (e) {
    next(e);
  }
};