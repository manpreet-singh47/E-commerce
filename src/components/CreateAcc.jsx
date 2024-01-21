import React from "react";
import { Link } from "react-router-dom";

const CreateAcc = () => {
  return (
    <section className="h-100 login">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example13">
                  Fullname
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="form1Example14"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example14">
                  Phone number
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example15"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example15">
                  Email fullname
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              {/* Submit button */}
              <div className=" loginButtons">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block "
                >
                  Sign up
                </button>
                <Link to={"/login"}>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg btn-block"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAcc;
