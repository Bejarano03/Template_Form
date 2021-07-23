const router = require("express").Router();
const memberRoutes = require("./members");

// Book routes
router.use("/member", memberRoutes);

module.exports = router;