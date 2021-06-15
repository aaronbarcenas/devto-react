import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Tags = () => {
  return (
    <Fragment>
      <div className="col-12 mt-5 ">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Reading List</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active text-dark" to="/">Listings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Podcasts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Videos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Tags</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Code of Conduct</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">DEV Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Sponsors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Terms of use</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark font-weight-bolder" to="/">Write a post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/"></Link>
            </li>
          </ul>
        </div>
    </Fragment>
  )
}

export default Tags
