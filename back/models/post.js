module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { //MySQL에는 users 테이블 생성
        // id가 기본적으로 포함.
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    }, {
        modelName: 'Post',
        tableName: 'posts',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
        db.Post.hasMany(db.Comment); // post.addComments, post.getComments
        db.Post.hasMany(db.Image); // post.addImages, post.getImages
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
        db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
    };
    return Post;
}