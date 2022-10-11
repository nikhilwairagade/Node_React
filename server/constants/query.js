exports.query={
    GET_USER_BY_EMAIL:"SELECT * FROM User WHERE Email = ?",
    ADD_USER:"INSERT INTO User SET Name=? , Email = ? , Password = ?,UserType = ?"
}