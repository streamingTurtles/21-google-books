const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// to match "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// to match "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
