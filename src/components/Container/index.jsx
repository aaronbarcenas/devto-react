import React, { Fragment, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import heart from "../../images/heart-icon.svg";
import comment from "../../images/comment-icon.svg";
import Tags from "./tags";

import Navbar from "./Navbar";

// import "./index.css";

export default function Container(props) {
  const buildPost = ({ _id, author, avatar, content, coverUrl, date, likes, postTags, postTitle }) => {
    console.log(_id, author)
    return (
      
      <div className="card mb-3" uniqueKey={_id}>
        <div className="card-body card-body-padding">
          <div className="container">
            <div className="d-flex flex-row">
              <div className="mb-2">
                <img
                  className="rounded-circle"
                  src={ avatar}
                  alt="..."
                  width="40"
                  height="40"
                />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">{author}</h6>
                <p className="card-text">
                  <small className="text-muted">{date} (2 months ago)</small>
                </p>
              </div>
            </div>
          </div>
          <a href={`/posts/${_id}`}> 
          <div className="text-movile" to="/">
            <h4 className="card-title text-dark fw-bolder ms-4 mb-1 title-hx">
              {postTitle}
            </h4>
            <nav className="nav ms-md-3">
              <Tags data={postTags}/>
            </nav>
          </div>
          </a>
          <div className="row d-flex justify-content-between">
            <div className="col-6 col-md-8 pe-0 ps-0 ps-md-3">
              <nav className="nav ms-md-4 ms-1">
                <Link
                  className="nav-link d-flex flex-row align-items-center ps-1 pe-0"
                  to="/" onClick={() => props.onLikeClick(_id)}
                >
                  <img src={ heart} alt="" width="30" height="30"/>
                  <p className="nav-link card-text ps-0">
                    <small className="text-muted d-flex w-100">
                      {likes}
                      <span className="d-none d-md-block ps-1">reactions</span>
                    </small>
                  </p>
                </Link>
                <a
                  className="nav-link d-flex flex-row align-items-center px-0"
                  href="/"
                >
                  <img src={comment} alt="" width="30" height="30" />
                  <p className="nav-link card-text d-fex flex-row ps-0 w-100">
                    <small className="text-muted d-flex w-100">
                      12<span className="d-none d-md-block ps-1">comments</span>
                    </small>
                  </p>
                </a>
              </nav>
            </div>
            <div className="col-6 col-md-4 d-flex justify-content-end align-items-center">
              <p className="nav-link card-text mb-0 px-1">
                <small className="text-muted px-0">1 min read</small>
              </p>
              <a
                href="/"
                className="btn btn-secondary btn-sm disabled"
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
if(props.data){
    const postUI = props.data.map(buildPost);
    return (
      <Fragment>
        <container className="col-12 col-md-9 col-xl-7 padding-zero">
          <Navbar />
          {postUI}
        </container>
      </Fragment>
    );
}
else{
  return <div/>
}
}
