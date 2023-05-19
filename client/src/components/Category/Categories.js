import React from 'react'
import CategoryItem from './CategoryItem';
import "./Category.css"
import categories from '../Category/category.json';

const Categories = () => {
  return (
    <div className="category-container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories