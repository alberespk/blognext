const bcrypt = require('bcrypt');

module.exports = {
    hash: (pass) => {
        return bcrypt.hash(pass, 10);
    },
    compare: (pass, hash) => {
        return bcrypt.compare(pass, hash);
    }
}