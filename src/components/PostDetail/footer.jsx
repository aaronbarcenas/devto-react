import React, { Fragment } from "react";

import twitter from "../../images/twitter-icon.svg";
import facebook from "../../images/facebook-icon.svg";
import github from "../../images/github-icon.svg";
import instagram from "../../images/instagram-icon.svg";
import twitch from "../../images/twitch-icon.svg";
import hojita from "../../images/forem-logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div id="first-div">
          <a href="">Home</a>
          <a href="">Reading List</a>
          <a href="">Listings</a>
          <a href="">Podcasts</a>
          <a href="">Videos</a>
          <a href="">Tags</a>
          <a href="">Code of Conduct</a>
          <a href="">FAQ</a>
        </div>
        <div>
          <a href="">DEV Shop</a>
          <a href="">Sponsors</a>
          <a href="">About</a>
          <a href="">Privacy policy</a>
          <a href="">Terms of use</a>
          <a href="">Contact</a>
          <a href="">Write a post</a>
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
