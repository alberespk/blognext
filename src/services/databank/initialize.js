const { sequelize } = require('./index');

(async () => {
    await sequelize.sync({ alter: true });
})();
