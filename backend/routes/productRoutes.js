const express = require("express");
const router = express.Router();
const { createProduct,getAllProduct,getSingleProduct, updateProduct,deleteProduct } = require("../controller/productController");

router.post("/",createProduct);
router.get("/",getAllProduct);
router.get("/:id",getSingleProduct);
router.put("/:id",updateProduct);
router.put("/delete/:id",deleteProduct);

module.exports = router;