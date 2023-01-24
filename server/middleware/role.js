const jwt = require("jsonwebtoken");

module.exports = function (roles) {
    return function (req, res, next) {
        
    
        if (req.method === "OPTIONS") {
            next();
        }

        try {
            const token = req.headers.authorization.split(" ")[1];

            if (!token) {
                res.status(403).json({ message: "User is not authorized" });
            }

            const { roles: userRoles } = jwt.verify(token, process.env.SECRET_KEY);
            let hasRole = false;

            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });

            if (!hasRole) {
                res.status(403).json({ message: "You do not have access to the user list" });
            }

            next();
        } catch (e) {
            console.log(e);
            res.status(403).json({ message: "User is not authorized" });
        }
    }
}