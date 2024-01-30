import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsActions } from "../slices/productsSlices";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.products.wishlist);
  return (
    <section
      style={{
        // background: "linear-gradient( to right , #08203e, #83d0cb)",
        height: "fit-content",
        minHeight: "100vh",
      }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-top h-100">
          <div className="col mt-4">
            <p>
              <span className="h2">Wishlist </span>
              <span className="h4">
                ({wishlist.length}
                {wishlist.length === 0 || wishlist.length > 1
                  ? " items"
                  : " item"}{" "}
                in your wishlist)
              </span>
            </p>
            {wishlist.length === 0 && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  // height: "100%",
                  marginTop: "12%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h4>No Items </h4>
              </div>
            )}
            {wishlist.map((item) => {
              return (
                <div className="card mb-4 h-full ">
                  <div className="card-body p-4 ">
                    <div
                      style={{
                        background:
                          "linear-gradient( to right , #fff, #83d0cb)",
                      }}
                      className="row align-items-center justify-between  "
                    >
                      <div className="col-md-2">
                        <img
                          src={item.images[1]}
                          className="img-fluid"
                          alt="Generic placeholder image"
                        />
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2 text-black">
                            Name
                          </p>
                          <p className="lead fw-normal mb-0 text-black">
                            {item.title}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2 text-black">
                            Category
                          </p>
                          <p className="lead fw-normal mb-0 text-black">
                            <i
                              className="fas fa-circle me-2"
                              style={{ color: "#fdd8d2" }}
                            />
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2 text-black">
                            Quantity
                          </p>
                          <p className="lead fw-normal mb-0 text-black">
                            {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2 text-black">
                            Price
                          </p>
                          <p className="lead fw-normal mb-0 text-black">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2 text-black">
                            Total
                          </p>
                          <p className="lead fw-normal mb-0 text-black">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <div className="wishListButtons">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mt-4 w-4 wishListButton "
                          onClick={() =>
                            dispatch(productsActions.addToCart(item)) &&
                            dispatch(productsActions.removeFromWishlist(item))
                          }
                        >
                          Add to cart
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mt-4 w-4 "
                          onClick={() =>
                            dispatch(productsActions.removeFromWishlist(item))
                          }
                        >
                          Remove from wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {wishlist.length === 0 ? null : (
              <div className="d-flex justify-content-end">
                <Link to={"/"}>
                  <button
                    type="button"
                    className="btn btn-light btn-lg me-2 mb-5 "
                  >
                    Continue shopping
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
