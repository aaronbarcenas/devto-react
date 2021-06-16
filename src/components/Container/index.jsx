import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Posts from './Posts'

import './index.css'

class Container extends React.Component {
  render() {
    return (
      <Fragment>
        <container className="col-12 col-md-9 col-xl-7 padding-zero">
          <Navbar/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
        </container>
      </Fragment>
    )
  }
}

export default Container