import { useParams, useNavigate } from "react-router-dom";

import "./Shop.css";

function Shop() {
  const { category = "all" } = useParams();
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    navigate(`/shop/${selectedCategory}`);
  };

  return (
    <div>
      <div className="fruit-container">
        <h1 className="fruit-title">Giỏ hoa quả</h1>
        <div className="filter-container">
          <div className="filter">
            <span className="filter-text">Filter Products:</span>
            <select
              className="filter-select"
              onChange={handleFilterChange}
              value={category}
            >
              <option value="all">All</option>
              <option value="fruit">Fruit</option>
              <option value="detox">Detox</option>
              <option value="alcohol">Alcohol</option>
              <option value="dried">Dried</option>
              <option value="gift-card">Gift Card</option>
            </select>
          </div>
          <div className="filter">
            <span className="filter-text">Sort Products:</span>
            <select className="filter-select">
              <option selected>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products  */}
    </div>
  );
}

export default Shop;
