const router = require("express").Router();
const bookRoutes = require("./books");

// book route
router.use("/books", bookRoutes);

module.exports = router;
