const connection = require('../service/database');

 exports.databaseOperation = function (query, data) {
    return new Promise(function (resolve, reject) {

        connection.query(query, data, function (error, results) {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

