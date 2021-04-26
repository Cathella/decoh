import React from "react";

const Category = ({ name, img }) => {
  return (
    <div className="col-lg-3">
      <div className="text-center bg-light mb-4 py-4">
        <img src={img} alt="" className="category-img transparent" />
        <div className="mt-3">
          <a href="#" className="text-muted">
            {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
