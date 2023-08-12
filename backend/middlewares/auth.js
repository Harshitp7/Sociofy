const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {

    try 
    {
        const { token } = req.cookies;
        if (!token) {
            res.status(401).json({
                message: "Please login first."
            });
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findById(decode._id);

        next();
    } 
    catch (error) 
    {
        res.status(401).json({
            message: error.message
        });
    }

}