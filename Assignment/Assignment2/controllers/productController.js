const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.addProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published,
    category: req.body.category,
});

product
    .save(product)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({
            message: err.message || "Some error occurred while creating the product."
        });
    });

};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProduct) {
      res.send(updatedProduct);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.send({ message: 'All products deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findProductsByName = async (req, res) => {
  try {
    const products = await Product.find({ name: new RegExp(req.query.name, 'i') });
    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

