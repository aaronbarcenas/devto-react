import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import forem from "../../images/forem-logo.svg";

const Info = () => {
  return (
    <Fragment>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-4 border-gray"></div>
      </div>

      <div className="col-12 d-flex justify-content-center my-3">
        <div className="col-lg-8 text-center">
          <p>
            <Link className="fw-bolder text-dark" to="/">
              DEV Community
            </Link>{" "}
            - A constructive and inclusive social network for software
            developers. With you every step of your journey.
          </p>
        </div>
      </div>

      <div className="col-12 d-flex justify-content-center my-3">
        <div className="col-lg-7 text-center">
          <p className="fw-light">
            Built on{" "}
            <Link className="fw-bolder text-dark" to="/">
              Forem
            </Link>{" "}
            -- the{" "}
            <Link className="fw-bolder text-dark" to="/">
              open source
            </Link>{" "}
            software that powers{" "}
            <Link className="fw-bolder text-dark" to="/">
              DEV
            </Link>{" "}
            and other inclusive communities.
          </p>
          <p>
            Made with love and{" "}
            <Link className="fw-bolder text-dark" to="/">
              Ruby on Rails
            </Link>
            . DEV Community @copy 2016 - 2021.
          </p>
          <Link to="/">
            <img src={forem} width="30" height="30" alt="" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
