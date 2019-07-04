const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll);

router.route("/:id")
  .get(usersController.getFavorites);

router.route("/getOne")
  .get(usersController.findOne);

router.route("/login")
  .post(usersController.login);

router.route("/signup")
  .post(usersController.signup);

module.exports = router;
