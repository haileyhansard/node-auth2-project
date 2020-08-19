const jwt = require("jsonwebtoken");
const constants = require("../config/constants");

module.exports = (req, res, next) => {
    //this will verify that users are logged in
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, constants.jwtSecret, (error, decodedToken) => {
            if(error) {
                //token was not valid or was modified
                res.status(401).json({ message: 'you shall not pass' })
            } else {
                //token is good and has access to the information inside
                req.decodedToken = decodedToken;

                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Please provide your credentials '})
    }
};