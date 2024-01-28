const jwt = require("jsonwebtoken");

module.exports =function(req, res, next){
    try {

        console.log(req.headers.authorization)
        // first string is bearer and second is token
        const token = req.headers.authorization.split(" ")[1];
        // if token is created from secret key then it will be decoded
        const decoded = jwt.verify(token, process.env.jwt_secret);

        // adding user data to request
        req.body.userId = decoded.userId;

        next()
    } catch (error) {
        res.status(401).send({
            success: false,
            message: 'Invalid token'
        })
    }
}