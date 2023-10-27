const Product = require("../models/productModel");

exports.fetchAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById({ _id: id });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      discountPrice,
    } = req.body;

    await product.create({
      title,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      discountPrice,
    });

    res.status(201).json({ message: "Created Successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndDelete({ _id: id });
    res.json({ message: "Product has been deleted" });
  } catch (error) {
    res.json(error);
  }
};
