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
    const { title, description, price, rating, brand, category, thumbnail } =
      req.body;

    console.log(req.body);
    console.log("mintuli is calling");

    await Product.create({
      title,
      description,
      price,
      rating,
      brand,
      category,
      thumbnail,
    });

    res.status(201).json({ message: "Created Successfully" });
  } catch (err) {
    console.log(err);
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
    console.log(id);
    await Product.findOneAndDelete({ _id: id });
    console.log("working");
    res.json({ message: "Product has been deleted" });
  } catch (error) {
    res.json(error);
  }
};
