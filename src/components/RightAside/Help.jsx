import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <Fragment>
      <div className="card my-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h4 className="card-title fw-bold mb-0">#help</h4>
          </div>
          <ul className="list-group list-group-flush">

            <li className="list-group-item">How secure do I need to connect a website to a database?
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">1 comment</small></p>
            </li>
            <li className="list-group-item">WYSIWYG editor for react js
              <Link className="btn btn-primary btn-sm nav-link card-text mb-0 mt-2 p-0 btn-new" to="/" role="button">New</Link>
            </li>
            <li className="list-group-item">Where can I host PostgreSQL with custom extensions for cheap (or free)
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">1 comment</small></p>
            </li>
            <li className="list-group-item">Can you suggest some simple UI assignment that can be given to fresher
              recruitment?
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">3 comments</small></p>
            </li>
            <li className="list-group-item">Best Strategy for choosing technology
              <p className="nav-link card-text mb-0 p-0"><small className="text-muted">1 comment</small></p>
            </li>
          </ul>
        </div>
    </Fragment>
  )
}

export default Help
