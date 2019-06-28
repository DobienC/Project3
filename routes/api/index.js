const router = require("express").Router();
const characterRoutes = require("./characters");
const userRoutes = require("./users");

// routes
router.use("/characters", characterRoutes);
router.use("/users", userRoutes);

module.exports = router;
