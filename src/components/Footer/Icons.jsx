import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import twitter from '../../images/twitter-icon.svg'
import facebook from '../../images/facebook-icon.svg'
import github from '../../images/github-icon.svg'
import instagram from '../../images/instagram-icon.svg'
import twitch from '../../images/twitch-icon.svg'

const Icons = () => {
  return (
    <Fragment>
      <div className="col-12 d-flex justify-content-center my-3">
          <Link className="pe-3" href="#">
            <img className="icon-invert" src={twitter} width="30" height="30" alt="twitter-icon"/>
          </Link>
          <Link className="px-3" href="#">
            <img className="icon-invert" src={facebook} width="30" height="30" alt="facebook-icon"/>
          </Link>
          <Link className="px-3" href="#">
            <img className="icon-invert" src={github} width="30" height="30" alt="github-icon"/>
          </Link>
          <Link className="px-3" href="#">
            <img className="icon-invert" src={instagram} width="30" height="30" alt="instagram-icon"/>
          </Link>
          <Link className="ps-3" href="#">
            <img className="icon-invert" src={twitch} width="30" height="30" alt=""/>
          </Link>
        </div>
    </Fragment>
  )
}

export default Icons
