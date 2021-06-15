import React, { Fragment } from 'react'
import logo from '../../images/devto.svg'
import { Link } from 'react-router-dom' 

const HeaderLogo = () => {
  return (
    <Fragment>
      <Link className="navbar-brand" to="/"><img src={logo} width="37" height="40" alt=""/></Link>
    </Fragment>
  )
}

export default HeaderLogo
