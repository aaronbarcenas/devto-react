import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Challenge = () => {
  return (
    <Fragment>
      <div class="card my-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <h4 class="card-title fw-bold mb-0">#challenge</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            HackerRank Big Sorting challenge
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            Chatter. The latest reactJS coding challenge in
            react-coding-challenges on GitHub
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            The Best Web Development Challenge Websites
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            Here Are 7 Fun, Yet Challenging Front-End Ideas You Can Code
            <Link
              class="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new"
              to="/"
              role="button"
            >
              New
            </Link>
          </li>
          <li class="list-group-item">
            Js13kGames swag is finalle out
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

export default Challenge;
