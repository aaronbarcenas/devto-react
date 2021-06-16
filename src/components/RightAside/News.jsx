import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <Fragment>
      <div class="card my-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <h4 class="card-title fw-bold mb-0">#news</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            NEW USER
            <p class="nav-link card-text mb-0 p-0">
              <small class="text-muted">1 comment</small>
            </p>
          </li>

          <li class="list-group-item">
            Sky Hub New Server On Discord
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            Sky Hub Discord Server Now Live
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            Titanium News &#35 1
            <p class="nav-link card-text mb-0 p-0">
              <small class="text-muted">2 comments</small>
            </p>
          </li>
          <li class="list-group-item">
            OVH Strasbourg: Halt and Catch FIre, Data Uploaded to the Cloud
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default News;
