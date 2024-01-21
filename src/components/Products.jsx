import React from "react";
import { useDispatch } from "react-redux";
import { getDetailsActions } from "../slices/getDetails";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const handleGetDetails = () => {
    dispatch(getDetailsActions.getDetails(product));
  };
  return (
    <div
      className="card"
      style={{
        width: "22rem",
        height: "25rem",
        background: "linear-gradient( to bottom right , #fff , transparent)",
      }}
    >
      <img
        src={product.images[3]}
        className="card-img-top product-image"
        alt="..."
      />
      <div className="card-body product-body">
        <h5 className="card-title text-white">{product.title}</h5>
        <p className="card-text text-white">{product.description}</p>
        <Link
          to={"/" + product.title}
          className="btn btn-primary"
          onClick={handleGetDetails}
        >
          Get Details
        </Link>
      </div>
    </div>
  );
};

export default Products;
