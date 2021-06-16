import React, { Fragment } from "react";
import Menu from "./Menu";
import Tags from './Tags'
import Shop from './Shop'

import './index.css'
class LeftAside extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className="col-md-3 col-xl-2 d-none d-md-block ps-3 pe-0">
          <div>
            <Menu/>
          </div>
          <div>
            <Tags/>
          </div>
          <div className="card mt-5">
            <Shop/>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default LeftAside;
