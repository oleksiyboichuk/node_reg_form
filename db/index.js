const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_2024", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    port: 8889,
    logging: false
});

const User = require('./User')(sequelize);
const Authkey = require('./Authkey')(sequelize);

module.exports = {
    sequelize: sequelize,
    user: User,
    authkey: Authkey
}