import React, { Fragment } from "react";

import heartIcon from "../../images/heart-icon.svg";
import unicornIcon from "../../images/unicorn-icon.svg";
import moreIcon from "../../images/more-icon.svg";
import savedIcon from "../../images/save-icon.svg";

const LeftAside = () => {
  return (
    <Fragment>
      <div
        className=" d-none d-md-block  col-12  text-right col-md-1 offset-lg-1 p-lg-2  "
        id="left-aside2"
      >
        <div className="card">
          <div className="card-body heart">
            <img
              style={{ width: "30px", marginRight: "3px" }}
              src={heartIcon}
            />
            <p style={{ marginLeft: "6px" }}>11</p>
          </div>
          <div className="card-body unicorn">
            <img src={unicornIcon} />
            <p style={{ marginLeft: "3px" }}>33</p>
          </div>
          <div className="card-body saved">
            <img src={savedIcon} />
            <p style={{ marginLeft: "3px" }}>52</p>
          </div>
          <div className="card-body dots">
            <img src={moreIcon} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftAside;
