var express = require("express");
const bodyParser = require("body-parser"); // Require body-parser to parse incoming request bodies
const mariadb = require("mariadb");
const multer = require("multer");

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

const storage = multer.diskStorage({
  destination: "uploads/", // Specify the destination directory to store uploaded files
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded file (you can customize this as per your requirements)
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = file.originalname.split(".").pop();
    cb(null, `${uniqueSuffix}.${fileExtension}`);
  },
});

const upload = multer({ storage });

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
    const rows = await conn.query(
      "SELECT id, name, price, active, image_url FROM Product"
    );
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
      res.status(200).json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Create a new product
router.post("/products", upload.single("image"), async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const {
      name,
      description,
      sku,
      category_id,
      price,
      display_price,
      active,
      weight,
      attribute_1,
      attribute_2,
      attribute_3,
    } = req.body;

    // Retrieve the uploaded file path from req.file if using diskStorage
    const image_url = req.file.path;

    const activeValue = Number(Boolean(active));

    let query =
      "INSERT INTO Product (name, description, sku, category_id, price, display_price, active, weight, image_url";
    let placeholders = "?, ?, ?, ?, ?, ?, ?, ?, ?";
    const values = [
      name,
      description,
      sku,
      category_id,
      price,
      display_price,
      activeValue,
      weight,
      image_url,
    ];

    const attributes = [attribute_1, attribute_2, attribute_3].filter(Boolean);

    if (attributes.length > 0) {
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        const placeholder = ", ?";
        query += `, attribute_${i + 1}`;
        placeholders += placeholder;
        values.push(attribute);
      }
    }

    query += `) VALUES (${placeholders})`;

    await conn.query(query, values);

    res.json({ message: "Product created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    conn.release();
  }
});

// Update an existing product
router.put("/products/:id", upload.single("image"), async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const {
      name,
      description,
      sku,
      category_id,
      price,
      display_price,
      active,
      weight,
      attribute_1,
      attribute_2,
      attribute_3,
    } = req.body;

    const { id } = req.params;

    let image_url = null;
    if (req.file) {
      // If a new image is uploaded, retrieve the uploaded file path from req.file
      image_url = req.file.path;
    }

    await conn.query(
      "UPDATE Product SET name=?, description=?, sku=?, category_id=?, price=?, display_price=?, active=?, weight=?, image_url=?, attribute_1=?, attribute_2=?, attribute_3=? WHERE id=?",
      [
        name,
        description,
        sku,
        category_id,
        price,
        display_price,
        active,
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
    const { name, description } = req.body;
    await conn.query("INSERT INTO Category (name, description) VALUES (?, ?)", [
      name,
      description,
    ]);
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
    const { name, description } = req.body;
    const result = await conn.query(
      "UPDATE Category SET name = ?, description = ? WHERE id = ?",
      [name, description, id]
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
