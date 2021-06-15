import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Discuss = () => {
  return (
    <Fragment>
      <div class="card my-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <h4 class="card-title fw-bold mb-0">#discuss</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            What was your win this week?
            <p class="nav-link card-text mb-0 p-0">
              <small class="text-muted">30 comments</small>
            </p>
          </li>
          <li class="list-group-item">
            The full Stack Ilusion
            <p class="nav-link card-text mb-0 p-0">
              <small class="text-muted">24 comments</small>
            </p>
          </li>
          <li class="list-group-item">
            What are you favourite Datascience and Machine Learning blogs?
            <p class="nav-link card-text mb-0 p-0">
              <small class="text-muted">1 comment</small>
            </p>
          </li>
          <li class="list-group-item">
            Do you ever block Javascript?! Why!?
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            Frustraciones a la orden del dia
            <p class="nav-link card-text mb-0 p-0">
              <small class="text-muted">2 comments</small>
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Discuss;
