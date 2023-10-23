const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router
  .get("/", fetchAllProducts)
  .post("/", createProduct)
  .get("/:id", fetchProductById)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

module.exports = router;
