import React, { Fragment } from "react";

const MainCard = () => {
  return (
    <Fragment>
      <div className="col-12 col-md-9 col-lg-6 p-0 " id="main">
        <div className="col-12 p-0 modow">
          <div className="col-12 d-flex p-0 p-md-2">
            <div className="card d-flex w-100">
              <img
                src="https://picsum.photos/800/351"
                className="card-img-top img-fluid"
                style={{ maxHeight: "350px" }}
                id="detail-img"
              />
              <div className="card-body" id="detail-id">
                <h5 className="card-title pl-5" style={{ fontSize: "2rem" }}>
                  <b id="detail-title" style={{ fontSize: "48px" }}>
                    a
                  </b>
                </h5>
                <p
                  className="card-text gray-text pl-5"
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <span className="tag-button bg-danger" id="detail-tags">
                    #Javascript
                  </span>{" "}
                  <span className="tag-button bg-dark">#SQL</span>{" "}
                  <span className="tag-button bg-success">#Technology</span>{" "}
                  <span className="tag-button bg-warning">#JS</span>
                </p>
                <div className="media mb-2">
                  <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    className="mr-2"
                    alt="Generic placeholder image"
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "16px",
                      marginBottom: "4px",
                      marginLeft: "10px",
                    }}
                  >
                    <b>Israel Salinas</b>
                  </span>
                  <span
                    className="gray-text"
                    style={{
                      fontSize: "16px",
                      marginBottom: "5px",
                      marginLeft: "10px",
                    }}
                    id="detail-date"
                  >
                    March 15 2021
                  </span>

                  <div className="media-body container-fluid">
                    <div id="detail-id"></div>
                    <p
                      className="mt-5 d-flex text-justify"
                      style={{ fontSize: "20px" }}
                    >
                      Hello folks, In my last article, I explained how you can
                      get started with Tailwind and React by creating a simple
                      login form. In that, we started with a bare minimum form
                      structure. In this article, let's work on the same login
                      form and implement responsiveness. Before we get started,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container col-12 d-flex justify-content-center mb-3 comment-section mt-3 row"
          id="comment-container"
        >
          <form
            action=""
            id="newcomment"
            style={{ height: "128px" }}
            className="d-flex w-100"
          >
            <span>
              <img
                id="user-nav-img"
                className="b-radius-100 mr-20"
                src="assets/images/usuarioLogNav.webp"
                alt=""
                style={{ height: "40px" }}
              />
            </span>
            <div className="col-11">
              <textarea
                name="comment"
                id="text-area"
                className="w-100"
              ></textarea>
              <button className="btn btn-primary add-comment" type="button">
                Submit
              </button>
            </div>
          </form>
          <div className="w-100" id="comment-wrapper"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainCard;
