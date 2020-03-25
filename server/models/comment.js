module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    content: {
      type: DataTypes.TEXT, // 긴 글
      allowNull: false,
    },
  }, {
    table_name: 'comments',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsToMany(db.User, { through: 'commentLike', as: 'commentLikers' });
    db.Comment.belongsTo(db.Post);
    db.Comment.hasMany(Comment, {as: 'parent'});
  };
  return Comment;
};
