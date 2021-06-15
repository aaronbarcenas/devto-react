import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import heart from "../../images/heart-icon.svg";
import comment from "../../images/comment-icon.svg";

const Posts = () => {
  return (
    <Fragment>
      <div className="card mb-3">
        <div className="card-body card-body-padding">
          <div className="container">
            <div className="d-flex flex-row">
              <div className="mb-2">
                <img
                  className="rounded-circle"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--Jax32E4s--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/487583/8d65f310-eefa-42ff-809c-772a6f66753c.jpeg"
                  alt="..."
                  width="40"
                  height="40"
                />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">Leonardo Schmitt</h6>
                <p className="card-text">
                  <small className="text-muted">Mar 13 (2 days ago)</small>
                </p>
              </div>
            </div>
          </div>
          <div className="text-movile" to="/">
            <h4 className="card-title text-dark fw-bolder ms-4 mb-1 title-hx">
              How to make a mouse ripple click effect with CSS, JS and HTML in 2
              steps 🖱️⚪
            </h4>
            <nav className="nav ms-md-3">
              <Link className="nav-link text-dark pl-0 pe-2 px-md-3" to="/">
                #css/
              </Link>
              <Link className="nav-link text-dark px-2 px-md-3" to="/">
                #html
              </Link>
              <Link className="nav-link text-dark px-2 px-md-3" to="/">
                #javascript
              </Link>
              <Link className="nav-link text-dark px-2 px-md-3" to="/">
                #webdev
              </Link>
            </nav>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-6 col-md-8 pe-0 ps-0 ps-md-3">
              <nav className="nav ms-md-4 ms-1">
                <Link
                  className="nav-link d-flex flex-row align-items-center ps-1 pe-0"
                  to="/"
                >
                  <img src={heart} alt="" width="30" height="30" />
                  <p className="nav-link card-text ps-0">
                    <small className="text-muted d-flex w-100">
                      54
                      <span className="d-none d-md-block ps-1">reactions</span>
                    </small>
                  </p>
                </Link>
                <Link
                  className="nav-link d-flex flex-row align-items-center px-0"
                  href="#"
                >
                  <img src={comment} alt="" width="30" height="30" />
                  <p className="nav-link card-text d-fex flex-row ps-0 w-100">
                    <small className="text-muted d-flex w-100">
                      12<span className="d-none d-md-block ps-1">comments</span>
                    </small>
                  </p>
                </Link>
              </nav>
            </div>
            <div className="col-6 col-md-4 d-flex justify-content-end align-items-center">
              <p className="nav-link card-text mb-0 px-1">
                <small className="text-muted px-0">1 min read</small>
              </p>
              <Link
                to="/"
                className="btn btn-secondary btn-sm disabled"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                Save
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
