const express =
require("express");

const router =
express.Router();

const auth =
require(
 "../middlewares/authMiddleware"
);

const role =
require(
 "../middlewares/roleMiddlewares"
);

const {
 getUsers
}
=
require(
 "../middlewares/userController"
);

router.get(

 "/",

 auth,

 role("Administrador"),

 getUsers

);

module.exports = router;
