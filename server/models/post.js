module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', { // 테이블명은 posts
    content: {
      type: DataTypes.TEXT, // 매우 긴 글 (글자수 모를 때)
      allowNull: false,
    },
  }, {
    table_name: 'posts',
    charset: 'utf8mb4', //  한글+이모티콘
    collate: 'utf8mb4_general_ci', //  한글+이모티콘
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요 //user테이블에 N 으로 속함
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    // db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼 생겨요
    db.Post.belongsToMany(db.Hashtag, { through: 'postHashtag' });
    db.Post.belongsToMany(db.User, { through: 'like', as: 'likers' });
  };
  return Post;
};
