const Product = require("../models/productModel");

exports.fetchAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};
