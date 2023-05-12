const express = require("express");
const bodyParser = require("body-parser");
const mariadb = require("mariadb");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(bodyParser.json());
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

const pool = mariadb.createPool({
  host: "localhost",
  user: "LETSFRUIT",
  password: "LETSFRUIT",
  database: "LETSFRUIT_DB",
});

app.use(
  cors({
    origin: "http://localhost:3000", // or an array of allowed origins
  })
);

// Get all products
app.get("/products/all", async (req, res) => {
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
app.get("/products/list", async (req, res) => {
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
app.get("/products/:id", async (req, res) => {
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
app.post("/products", async (req, res) => {
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
app.put("/products/:id", async (req, res) => {
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
app.get("/categories", async (req, res) => {
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
app.get("/categories/:id", async (req, res) => {
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
app.get("/categories/:id/products", async (req, res) => {
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
app.post("/categories", async (req, res) => {
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
app.put("/categories/:id", async (req, res) => {
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

app.listen(port, () => console.log(`Listening on port ${port}`));
