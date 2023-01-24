const Router = require("express");
const { check } = require("express-validator");
const controller = require("../controllers/auth");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const router = new Router();

router.post("/sign-up", [
    check("email", "Email should not be empty").notEmpty(),
    check("email", "Incorrect email format").isEmail(),
    check("password", "Password length should be more than 8 characters").isLength({ min: 8, max: 20 })
], controller.signUp);
router.post("/sign-in", controller.signIn);
router.post("/recover", controller.recover);
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers);

module.exports = router;