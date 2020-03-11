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

exports.getPostById = async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }],
    });
    res.json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.postComment = async (req, res, next) => { // POST /api/post/1000000/comment
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: 1, //req.user.id
      content: req.body.content,
      CommentId: null,
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comment);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}

exports.postChildComment = async (req, res, next) => { // POST /api/post/1000000/comment/child
  try {
    const parentComment = await db.Comment.findOne({ where: { id: req.params.id } });
    if (!parentComment) {
      return res.status(404).send('부모 댓글이 존재하지 않습니다.');
    }
    const post = await db.Post.findOne({ where: { id: parentComment.PostId } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: parentComment.PostId,
      CommentId: parentComment.id,
      UserId: 1, //req.user.id
      content: req.body.content,
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comment);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}