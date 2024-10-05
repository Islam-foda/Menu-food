// import React from "react";

export default function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            onClick={() => filterItems(item)}
            key={index}
            className="filter-btn"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

Categories.propTypes = {
  categories: String,
  filterItems: function () {},
};
