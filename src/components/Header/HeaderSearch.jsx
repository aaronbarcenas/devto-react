import React, { Fragment } from 'react'

const HeaderSerch = () => {
  return (
    <Fragment>
      <form className="form-inline my-2 my-lg-0 d-none d-md-block">
          <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
      </form>
    </Fragment>
  )
}

export default HeaderSerch
