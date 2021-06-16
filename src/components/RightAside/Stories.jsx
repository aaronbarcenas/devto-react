import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <Fragment>
      <div className="card">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/i/vuoa6jsh5uhy32ehpizb.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title fw-bolder">Stories (122)</h3>
          <p className="card-text">
            SheCoded 2021 -- Stories From Women Building Software and the Allies
            Supporting Them
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Nevertheless, she coded: Celine Surai
          </li>
          <li className="list-group-item">
            Nevertheless, she coded: Shufaa Yakut
          </li>
          <li className="list-group-item">
            Nevertheless, she coded: Carol Kariuki
          </li>
          <li className="list-group-item">
            Nevertheless, she coded: Sharon Telewa
          </li>
        </ul>
        <div className="card-body">
          <Link to="/" className="card-link">
            <button
              type="button"
              className="btn btn-primary btn-lg color-blue py-1 w-100"
            >
              Share Your Story
            </button>
          </Link>
          <Link to="/" className="">
            <button
              type="button"
              className="btn btn-secondary btn-lg color-light-grey py-1 w-100 mt-2"
            >
              See all posts
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Stories;
