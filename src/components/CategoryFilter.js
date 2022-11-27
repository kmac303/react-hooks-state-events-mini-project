import { render } from "@testing-library/react";
import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  const renderCategories = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button key={category} className={className} onClick={() => onSelectCategory(category)}>{category}</button>
    )
  })
  // console.log(categories);
  // return (
  //   <button></button>
  // )

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
