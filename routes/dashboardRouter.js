const router = require("./router")
const DashboardController = require("../controllers/DashboardController");

router.get("/admin",DashboardController.index);

module.exports = router;