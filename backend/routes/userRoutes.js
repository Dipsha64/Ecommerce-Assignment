const express = require("express");
const router = express.Router();
const { getAllUser,getSingleUser, updateUser,deleteUser  } = require("../controller/userController");
const { authenticate } = require("../auth/verifyToken");

router.get("/",authenticate,getAllUser);
router.get("/:id",getSingleUser);
router.put("/:id",updateUser);
router.put("/delete/:id",deleteUser);

module.exports = router;