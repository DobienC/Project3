const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// Matches with "/api/books"
router.route("/")
  .get(charactersController.findAll)
  .post(charactersController.create)
  .delete(charactersController.deleteAll);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
