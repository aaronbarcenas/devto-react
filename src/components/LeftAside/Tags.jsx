import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import cog from "../../images/cog-icon.svg";

const Tags = () => {
  return (
    <Fragment>
      <div class="d-flex justify-content-between mt-4 ps-3">
        <h5 class="font-weight-bolder">My Tags</h5>
        <img class="icon-invert" src={cog} alt="" />
      </div>
      <ul class="navbar-nav me-auto text-dark ps-2">
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/tags/github">
            #git&github
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/tags/html5">
            #html5
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/tags/css3">
            #css3
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/tags/sass">
            #sass
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/">
            #bootstrap4
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/">
            #javascript
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/">
            #jquery
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/">
            #ajax
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <Link class="nav-link text-dark px-2" to="/">
            #dom
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Tags;
