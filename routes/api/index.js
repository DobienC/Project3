const router = require("express").Router();
const bookRoutes = require("./books");
const characterRoutes = require("./characters");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);
router.use("/characters", characterRoutes);
router.use("/users", userRoutes);

module.exports = router;
