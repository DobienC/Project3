const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
//   .delete(charactersController.deleteAll);

router.route("/getOne")
  .get(usersController.findOne);
// Matches with "/api/books/:id"
// router

router.route("/login")
  .post(usersController.login);

router.route("/signup")
  .post(usersController.create);
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
