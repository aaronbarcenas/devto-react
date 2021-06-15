import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Listings = () => {
  return (
    <Fragment>
      <div className="card my-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h4 className="card-title fw-bold mb-0">Listings</h4>
          <Link Link="/">See all</Link>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            JavaScript Whizzkid needed
            <p className="nav-link card-text mb-0 p-0">
              <small className="text-muted">jobs</small>
            </p>
          </li>
          <li className="list-group-item">
            Looking for remote work as an iOS, backend (NodeJS) or fullstack
            (iOS + ReactJS + NodeJS) dev
            <p className="nav-link card-text mb-0 p-0">
              <small className="text-muted">products</small>
            </p>
          </li>
          <li className="list-group-item">
            Building Your Mouseless Development Environment
            <p className="nav-link card-text mb-0 p-0">
              <small className="text-muted">forhire</small>
            </p>
          </li>
          <li className="list-group-item">
            I'll write great and engaging content for your blog
            <p className="nav-link card-text mb-0 p-0">
              <small className="text-muted">forhire</small>
            </p>
          </li>
          <li className="list-group-item">
            Render(ATL) React Javascrip Conference
            <p className="nav-link card-text mb-0 p-0">
              <small className="text-muted">events</small>
            </p>
          </li>
          <li className="list-group-item text-center">
            <Link to="/">Create a Listing</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Listings;
