const router = require("express").Router();
const bookRoutes = require("./books");
const characterRoutes = require("./characters")
// Book routes
router.use("/books", bookRoutes);
router.use("/characters", characterRoutes);

module.exports = router;
