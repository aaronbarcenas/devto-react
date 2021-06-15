import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import home from '../../images/home-icon.svg'
import reading from '../../images/reading-icon.svg'
import listings from '../../images/listings-icon.svg'
import podcasts from '../../images/podcasts-icon.svg'
import videos from '../../images/videos-icon.svg'
import tags from '../../images/tags-icon.svg'

const Menu = () => {
  return (
    <Fragment>
      <ul class="navbar-nav mr-auto text-dark">
        <li class="nav-item active d-flex pt-2 li-hov">
          <img class="px-2" src={home} alt="Home" />
          <Link class="nav-link text-dark" to="/home">
            Home<span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <img class="px-2" src={reading} alt="Reading" />
          <Link class="nav-link text-dark" to="/reading">
            Reading List
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <img class="px-2" src={listings} alt="Listings" />
          <Link class="nav-link text-dark" to="/listings">
            Listings
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <img class="px-2" src={podcasts} alt="podcasts" />
          <Link class="nav-link text-dark" to="/podcasts">
            Podcasts
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <img class="px-2" src={videos} alt="videos" />
          <Link class="nav-link text-dark" to="/videos">
            Videos
          </Link>
        </li>
        <li class="nav-item active d-flex pt-2 li-hov">
          <img class="px-2" src={tags} alt="tags" />
          <Link class="nav-link text-dark" to="/tags">
            Tagss
          </Link>
        </li>
        <li class="nav-item d-flex pt-2 li-hovs ps-3">
          <Link class="nav-link pl-5 text-dark" to="/more">
            More...
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Menu;
