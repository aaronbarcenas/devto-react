import React, { Fragment } from 'react'

const HeaderHamburger = () => {
  return (
    <Fragment>
      <button className="navbar-toggler border-top-0 border-right-0 border-left-0 border-bottom-0" type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
    </Fragment>
  )
}

export default HeaderHamburger
