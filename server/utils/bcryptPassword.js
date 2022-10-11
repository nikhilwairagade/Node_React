const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

exports.verifyPassword = (password, hashPassword) => {
    return password && hashPassword ? bcrypt.compare(password, hashPassword) : null;
}

exports.generateHashPassword = (password) => {
    return password ? bcrypt.hashSync(password, SALT_ROUNDS) : null;
}   