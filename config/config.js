require('dotenv').config();

module.exports = {
    "development": {
        "username": "root",
        "password": process.env.SEQUELIZE_PASSWORD,
        "database": "nodesns",
        "host": "192.168.99.100",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "qwe123!@#",
        "database": "nodebird_test",
        "host": "192.168.99.100",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": process.env.SEQUELIZE_PASSWORD,
        "database": "nodesns",
        "host": "192.168.99.100",
        "dialect": "mysql",
        "logging": false
    }
};
