import React from "react";
import HeaderButton from "./HeaderButton";
import HeaderHamburger from "./HeaderHamburger";
import HeaderIcons from "./HeaderIcons";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="container-fluit bg-light border border-top-0 border-right-0 border-left-0 border-gradient-secondary sticky-top">
        <div className="container navbar navbar-expand-md navbar-light bg-light  justify-content-between px-0 py-0">
        <div className="d-flex align-items-center col-6 pl-0">
          <HeaderHamburger/>
          <HeaderLogo/>
          <HeaderSearch/>
        </div>
        <div className="right-wrap d-flex align-items-center col-6 justify-content-end pr-0">
          <HeaderButton/>
          <HeaderIcons/>
        </div>

        </div>
        {/* <div className="container d-flex justify-content-between">
          <div className="logo-search d-flex justify-content-center align-items-center">
            <HeaderLogo />
            <HeaderSearch />
          </div>

          <div className="auth d-flex justify-content-center align-items-center">
            <AppButton text="Log in" type="anchor" />

            <AppButton
              className="btn-primary"
              type="anchor"
              text="Create account"
            />
          </div>
        </div> */}
        
      </nav>
    );
  }
}

export default Header;
