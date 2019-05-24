const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// Matches with "/api/books"
router.route("/")
  .get(charactersController.findAll)
  .post(charactersController.createCharacter)
  .delete(charactersController.deleteAll);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(charactersController.findById);
  // .put(booksController.update)
  // .delete(booksController.remove);

// router.route("/strength")
//   // .get(charactersController.findAllByStr);
//   .get(charactersController.findAll);
router.route("/sorted/strength")
  .get(charactersController.findAllByStr);


module.exports = router;
