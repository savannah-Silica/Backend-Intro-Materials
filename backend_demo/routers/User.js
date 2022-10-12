const router = require("express").Router();

const Authcontroller = require("../controllers/User");


router.post("/create", Authcontroller.CreateUser);
router.get("/",Authcontroller.findUsers);
router.get("/:id", Authcontroller.findOneUser);


module.exports = router;
