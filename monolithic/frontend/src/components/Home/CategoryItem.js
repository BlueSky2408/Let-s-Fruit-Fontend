import { Link } from "react-router-dom";

import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item-container">
      <img className="category-item-image" src={item.img} alt={item.title} />
      <div className="category-item-info">
        <h1 className="category-item-title">{item.title}</h1>
        <div className="category-item-button-wrapper">
          <Link to={item.router} className="category-item-button">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
