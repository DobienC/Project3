const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// Matches with "/api/books"
router.route("/")
  .get(charactersController.findAll)
  .post(charactersController.createCharacter)
  .delete(charactersController.deleteAll);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(charactersController.findById)
  .delete(charactersController.deleteById);
  // .put(booksController.update)
  // .delete(booksController.remove);

// router.route("/strength")
//   // .get(charactersController.findAllByStr);
//   .get(charactersController.findAll);
router.route("/sorted/class")
  .get(charactersController.findAllByClass);

router.route("/sorted/race")
  .get(charactersController.findAllByRace);

router.route("/sorted/name")
  .get(charactersController.findByName);

module.exports = router;
