module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // 테이블명은 users > sequelize가 자동으로 소문자+복수형 으로 바꿈
    nickName: {
      type: DataTypes.STRING(20), // 20글자 이하
      allowNull: false, // 필수, null 불가
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
    charset: 'utf8', // 한글 저장하기 위한 설정
    collate: 'utf8_general_ci', // 한글 저장하기 위한 설정
    //tableName: 'users', // 테이블명 여기에서 지정할 수도 있음
  });

  User.associate = (db) => {
    db.User.hasMany(db.Post, { as: 'Posts' }); //한명이 여러글 쓸 수 있음 > 1:N
    db.User.hasMany(db.Comment);
    //N:M 관계는 중간 테이블(관계도 테이블)이 생김 > through 로 명시해줌
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 좋아요 누른 게시글 //belongsToMany는 as 사요하면 좋음 > 테이블 컬럼 명을 as에 기재한 이름으로 사용 가능해짐
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' }); //같은 테이블 끼리는 as 사용해야함
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' }); //같은 테이블 끼리 N:M일 때는 두번 기재해줘야함
  };

  return User;
};
