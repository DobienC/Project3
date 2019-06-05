const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");
const isAuthenticated = require("../../controllers/authentication");

// Matches with "/api/characters"
router.route("/")
  .get(charactersController.findAll)
  .post(isAuthenticated, charactersController.createCharacter)
  .delete(isAuthenticated, charactersController.deleteAll);

// Matches with "/api/characters/:id"
router.route("/:id")
  .get(charactersController.findById)
  .delete(isAuthenticated, charactersController.deleteById);

// Matches with "/api/characters/sorted/..."
router.route("/sorted/class")
  .get(charactersController.findAllByClass);

router.route("/sorted/race")
  .get(charactersController.findAllByRace);

router.route("/sorted/name")
  .get(charactersController.findByName);

module.exports = router;
