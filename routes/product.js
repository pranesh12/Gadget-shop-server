const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router
  .get("/products", fetchAllProducts)
  .post("/products", createProduct)
  .get("products/:id", fetchProductById)
  .put("/products/:id", updateProduct);

module.exports = router;
