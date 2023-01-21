module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });

    return model;
}