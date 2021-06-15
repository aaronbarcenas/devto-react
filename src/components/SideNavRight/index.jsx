import React from 'react';

import AppCard from '../Header/AppCard';

class SideNavRight extends React.Component {
    render() {
        return (
            <div className="col-3">
                <AppCard>
                <div className="card my-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                <h4 className="card-title font-weight-bold mb-0">Listings</h4>
                <a href="#">See all</a>
            </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">JavaScript Whizzkid needed
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">jobs</small></p>
            </li>
            <li className="list-group-item">Looking for remote work as an iOS, backend (NodeJS) or fullstack (iOS + ReactJS
              + NodeJS) dev
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">products</small></p>
            </li>
            <li className="list-group-item">Building Your Mouseless Development Environment
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">forhire</small></p>
            </li>
            <li className="list-group-item">I'll write great and engaging content for your blog
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">forhire</small></p>
            </li>
            <li className="list-group-item">Render(ATL) React Javascrip Conference
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">events</small></p>
            </li>
            <li className="list-group-item text-center">
              <a href="#">Create a Listing</a>
            </li>
          </ul>
        </div>
                </AppCard>
            </div>
            
        )
    }
}

export default SideNavRight;