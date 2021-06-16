import React, { Fragment } from "react";

import Tags from "./Tags";
import Icons from './Icons'
import Info from './Info'
import Sloth  from './Sloth'

import './index.css'

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <Tags />
            <Icons/>
            <Info />
          </div>
        </div>
        <Sloth/>
      </Fragment>
    );
  }
}

export default Footer;
