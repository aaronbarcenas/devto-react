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
        <div class="container-fluid bgcolor">
          <div class="row">
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
