const {
  login,
  register,
  getAllUsers,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allUsers", getAllUsers);

module.exports = router;
