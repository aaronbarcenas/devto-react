import React, { Fragment } from "react";

import twitter from "../../images/twitter-icon.svg";
import facebook from "../../images/facebook-icon.svg";
import github from "../../images/github-icon.svg";
import instagram from "../../images/instagram-icon.svg";
import twitch from "../../images/twitch-icon.svg";
import hojita from "../../images/forem-logo.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div id="first-div">
          <Link className="LINK">Home</Link>
          <Link className="LINK">Reading List</Link>
          <Link className="LINK">Listings</Link>
          <Link className="LINK">Podcasts</Link>
          <Link className="LINK">Videos</Link>
          <Link className="LINK">Tags</Link>
          <Link className="LINK">Code of Conduct</Link>
          <Link className="LINK">FAQ</Link>
        </div>
        <div>
          <Link className="LINK">DEV Shop</Link>
          <Link className="LINK">Sponsors</Link>
          <Link className="LINK">About</Link>
          <Link className="LINK">Privacy policy</Link>
          <Link className="LINK">Terms of use</Link>
          <Link className="LINK">Contact</Link>
          <Link className="LINK">Write a post</Link>
        </div>
        <div className="social-media">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={twitch} alt="" />
        </div>
        <div>
          <p>
            <b>DEV Community</b> – A constructive and inclusive social network
            for software developers. With you every step of your journey.
          </p>
        </div>
        <div>
          <p>
            Built on <b>Forem</b> — the <b>open source</b> software that powers{" "}
            <b>DEV</b> and other inclusive communities.
          </p>
        </div>
        <div>
          <p>
            Made with love and <b>Ruby on Rails</b>. DEV Community © 2016 -
            2021.
          </p>
        </div>
        <div>
          <img src={hojita} alt="" />
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
