module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // 테이블명은 posts
    content: {
      type: DataTypes.TEXT, // 매우 긴 글 (글자수 모를 때)
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', //  한글+이모티콘
    collate: 'utf8mb4_general_ci', //  한글+이모티콘
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요 //user테이블에 N 으로 속함
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    // db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼 생겨요
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // N:M관계로 인해 생긴 중간 테이블명을 through 로 명시해줌
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
  };
  return Post;
};
