module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true
        },
        mail: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        pass: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return model;
}