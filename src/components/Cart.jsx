import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { productsActions } from "../slices/productsSlices";

const Cart = () => {
  let shipping = 4;
  const cart = useSelector((store) => store.products.cart);
  const price = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();

  return (
    <section className="h-100 gradient-custom cartContainer">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4 ">
          <div className="col-md-8 ">
            <div className="card mb-4 ">
              <div className="card-header py-3 ">
                <h5 className="mb-0">Cart - {cart.length} items</h5>
              </div>
              <div className="card-body cartBody ">
                {cart.map((item) => {
                  return (
                    <div className="row">
                      <hr className="my-4" />
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={item.images[0]}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>{item.description}</p>
                        <button
                          onClick={() =>
                            dispatch(productsActions.removeFromCart(item))
                          }
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                        >
                          <MdDelete />
                        </button>
                        <button
                          onClick={() =>
                            dispatch(productsActions.addToWishlist(item)) &&
                            dispatch(productsActions.removeFromCart(item))
                          }
                          type="button"
                          className="btn btn-danger btn-sm mb-2"
                          data-mdb-toggle="tooltip"
                          title="Move to the wish list"
                        >
                          <FaHeart />
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              dispatch(productsActions.decreaseQuantity(item))
                            }
                          >
                            <FaMinus />
                          </button>
                          <div className="form-outline">
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              value={item.quantity}
                              type="number"
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="form1">
                              Quantity
                            </label>
                          </div>
                          <button
                            onClick={() =>
                              dispatch(productsActions.addToCart(item))
                            }
                            className="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <FaPlus />
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>
                            Price ${eval(item.price * item.quantity)}
                          </strong>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body cartBody   ">
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 bg-transparent text-white ">
                    Products
                    <span>{cart.length}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0  bg-transparent text-white">
                    Shipping
                    <span>${shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 bg-transparent">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>${eval(price + shipping)}</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
