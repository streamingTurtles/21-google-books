const router = require("express").Router();
const bookRoutes = require("./books");

// /books route
router.use("/books", bookRoutes);

module.exports = router;
