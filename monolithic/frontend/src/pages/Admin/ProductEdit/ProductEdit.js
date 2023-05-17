import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ProductEdit.css";

const ProductEdit = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  const [active, setActive] = useState(false);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const { id } = useParams();
  const [mode, setMode] = useState("add");
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchCategories();
    if (id) {
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        // Handle the case where the id parameter is not a valid integer
        console.log("Invalid id parameter");
      } else {
        // Valid integer id, fetch and set the product data
        fetchProductData(parsedId);
      }
    }
  }, [id]);

  const fetchCategories = () => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const fetchProductData = (productId) => {
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMode("edit");
          // Set the form field values if the product exists
          setImage(data.image_url);
          setName(data.name);
          setDescription(data.description);
          setCategoryId(data.category_id);
          setPrice(data.price);
          setSku(data.sku);
          setStock(data.weight);
          setActive(data.active);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const file = fileInputRef.current.files[0]; // Get the selected file

    if (file) {
      formData.append("image", file);
    }

    // Add other form field values to the form data
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category_id", categoryId);
    formData.append("price", price);
    formData.append("display_price", price);
    formData.append("sku", sku);
    formData.append("weight", stock);
    formData.append("active", active);

    let response;
    let url = "http://localhost:3001/products";
    let method;
    if (mode === "add") {
      method = "POST";
    } else if (mode === "edit") {
      url += `/${id}`;
      method = "PUT";
    }

    try {
      response = await fetch(url, {
        method,
        body: formData,
      });

      if (response.ok) {
        // Product successfully created
        console.log("Product created");
      } else {
        // Handle error response
        console.error("Product creation failed");
      }
    } catch (error) {
      // Handle network or fetch error
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="addProduct">
      <h1 className="addProductTitle">
        {mode === "add" ? "New Product" : "Edit Product"}
      </h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            ref={fileInputRef}
            // value={image}
            // onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select
            name="category"
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.description}
              </option>
            ))}
          </select>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>SKU</label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="text"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
        </div>
        <button className="addProductButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
