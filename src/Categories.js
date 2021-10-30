import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((cat,i)=> (
          <button className="filter-btn" key={i} onClick={()=>filterItems(cat)}>
            {cat}
          </button>
        )
      )}
    </div>
  );
};

export default Categories;
