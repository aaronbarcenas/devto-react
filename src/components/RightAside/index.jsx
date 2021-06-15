import React, { Fragment } from 'react';
import Stories from './Stories'
import Listings from './Listings';
import News from './News';
import Help from './Help'
import Discuss from './Discuss';
import ExplainLike from './ExplainLike';
import Challenge from './Challenge';

class RightAside extends React.Component {
  render() {
    return (
      <Fragment>
        <aside className="col-3 px-0 d-none d-xl-block">
        <Stories/>
        <Listings/>
        <News/>
        <Help/>
        <Discuss/>
        <ExplainLike/>
        <Challenge/>

        </aside>
        
      </Fragment>
    )
  }
}

export default RightAside