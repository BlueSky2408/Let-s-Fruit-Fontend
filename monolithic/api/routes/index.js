var express = require('express');
const bodyParser = require("body-parser"); // Require body-parser to parse incoming request bodies 
const mariadb = require("mariadb");
// const cors = require("cors"); // Require cors to enable cross-origin resource sharing 

var router = express.Router(); // Create a router object 

router.use(bodyParser.json()); // Use body-parser to parse incoming request bodies 

// Create a pool of connections to the MariaDB database
const pool = mariadb.createPool({
  host: "localhost",
  user: "LETSFRUIT",
  password: "LETSFRUIT",
  database: "LETSFRUIT_DB",
});

// Use cors to enable cross-origin resource sharing 
// router.use(
//   cors({
//     origin: "http://localhost:3000"
//   })
// );

// Get all products
router.get("/products/all", async (req, res) => {
  console.log("Fetching all products");
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM Product");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Get a list of products with some column
router.get("/products/list", async (req, res) => {
  console.log("Fetching all products");
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT id, name, price, enabled, image_url FROM Product");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Get a single product
router.get("/products/:id", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { id } = req.params;
    const rows = await conn.query("SELECT * FROM Product WHERE id = ?", [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Create a new product
router.post("/products", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const {
      name,
      description,
      sku,
      category_id,
      price,
      display_price,
      enabled,
      weight,
      image_url,
      attribute_1,
      attribute_2,
      attribute_3,
    } = req.body;
    await conn.query(
      "INSERT INTO Product (name, description, sku, category_id, price, display_price, enabled, weight, image_url, attribute_1, attribute_2, attribute_3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        description,
        sku,
        category_id,
        price,
        display_price,
        enabled,
        weight,
        image_url,
        attribute_1,
        attribute_2,
        attribute_3,
      ]
    );
    res.json({ message: "Product created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Update an existing product
router.put("/products/:id", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { id } = req.params;
    const {
      name,
      description,
      sku,
      category_id,
      price,
      display_price,
      enabled,
      weight,
      image_url,
      attribute_1,
      attribute_2,
      attribute_3,
    } = req.body;
    const result = await conn.query(
      "UPDATE Product SET name = ?, description = ?, sku = ?, category_id = ?, price = ?, display_price = ?, enabled = ?, weight = ?, image_url = ?, attribute_1 = ?, attribute_2 = ?, attribute_3 = ? WHERE id = ?",
      [
        name,
        description,
        sku,
        category_id,
        price,
        display_price,
        enabled,
        weight,
        image_url,
        attribute_1,
        attribute_2,
        attribute_3,
        id,
      ]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json({ message: "Product updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Get all categories
router.get("/categories", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM Category");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Get a single category
router.get("/categories/:id", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { id } = req.params;
    const rows = await conn.query("SELECT * FROM Category WHERE id = ?", [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Get all products in a category
router.get("/categories/:id/products", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { id } = req.params;
    const rows = await conn.query(
      "SELECT * FROM Product WHERE category_id = ?",
      [id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Create a new category
router.post("/categories", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { name, description, origin, product } = req.body;
    await conn.query(
      "INSERT INTO Category (name, description, origin, product) VALUES (?, ?, ?, ?)",
      [name, description, origin, product]
    );
    res.json({ message: "Category created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Update an existing category
router.put("/categories/:id", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { id } = req.params;
    const { name, description, origin, product } = req.body;
    const result = await conn.query(
      "UPDATE Category SET name = ?, description = ?, origin = ?, product = ? WHERE id = ?",
      [name, description, origin, product, id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.json({ message: "Category updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

module.exports = router;
