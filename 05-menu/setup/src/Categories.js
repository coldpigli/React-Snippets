import React from 'react';

const Categories = ({categories,filterItem}) => {
  return (
    <div className = "btn-container">
      {categories.map((category, index)=>{
        return (
          <button className="filter-btn" onClick={()=>{
            filterItem(category)
          }}>{category}</button>
        );
      })}
    </div>
  );
};

export default Categories;
