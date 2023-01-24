const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    };

    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
}

class authController {
    async signUp(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Registration error", errors })
            }

            const { email, password } = req.body;
            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: "User with such email already exist" });
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({ value: "USER" });
            const user = await new User({ email, password: hashPassword, roles: [userRole.value] });
            await user.save();
            return res.json({ message: "User successfully registered" })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Registration error" });
        }
    }

    async signIn(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: "User with such email not found" });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ message: "Wrong password" })
            }

            const token = generateAccessToken(user._id, user.roles);
            return res.json({ token });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Authorization error" });
        }
    }

    async recover(req, res) {
        try {
            
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Recover error" });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new authController();