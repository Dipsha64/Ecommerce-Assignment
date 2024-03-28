const express = require("express");
const router = express.Router();
const {getAllOrder,getSingleOrder,createOrder, updateOrder,deleteOrder } = require("../controller/orderController");

router.get("/",getAllOrder);
router.get("/:id",getSingleOrder);
router.post("/",createOrder);
router.put("/:id",updateOrder)
router.post("/delete/:id",deleteOrder);

module.exports = router;