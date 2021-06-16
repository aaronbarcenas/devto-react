import React from "react";
import LeftAside from "./leftAside";
import MainCard from "./mainCard";
import RightAside from "./rightAside";
import Footer from "./footer";

import "./styles.css";

class PostDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bgcolor">
          <div className="row">
            <LeftAside />
            <MainCard />
            <RightAside />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PostDetail;
