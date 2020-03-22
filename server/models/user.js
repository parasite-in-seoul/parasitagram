module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', { // 테이블명은 users
    nickName: {
      type: DataTypes.STRING(20), // 20글자 이하
      allowNull: false, // 필수
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true, // 고유한 값
    },
    password: {
      type: DataTypes.STRING(100), // 100글자 이하
      allowNull: false,
    },
  }, {
    table_name: 'users',
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글이 저장돼요
  });

  User.associate = (db) => {
    db.User.hasMany(db.Post, { as: 'posts' });
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Comment, { through: 'commentLike', as: 'commentLiked' });
    db.User.belongsToMany(db.Post, { through: 'like', as: 'liked' });
    db.User.belongsToMany(db.User, { through: 'follow', as: 'followers', foreignKey: 'followingId' });
    db.User.belongsToMany(db.User, { through: 'follow', as: 'followings', foreignKey: 'followerId' });
  };

  return User;
};
