import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-light d-none d-lg-block d-md-flex justify-content-between px-0">
        <div>
          <ul class="nav d-flex justify-content-between w-100 align-items-center">
            <h4 class="navbar-brand mb-0 d-flex justify-content-start font-weight-bolder">
              Posts
            </h4>
            <div class="d-flex flex-row justify-content-end">
              <li class="nav-item">
                <Link class="nav-link active link-sw link-active" to="/feed">
                  Feed
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link-sw" to="/weekk">
                  Week
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link-sw" to="/month">
                  Month
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link-sw" to="/year">
                  Year
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link-sw" to="/infinity">
                  Infinity
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link pr-1 link-sw" to="lastest/">
                  Latest
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
