const router = require("express").Router();
const membersController = require("../../controllers/membercontroller");

// Matches with "/api/books"
router.route("/")
  .get(membersController.findAll)
  .post(membersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(membersController.findById)
  .put(membersController.update)
  .delete(membersController.remove);

module.exports = router;