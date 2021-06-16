import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";

const MainCard = () => {
  const {_id} = useParams()

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${_id}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  console.log(data.data)
  return (
    <Fragment>
      <div className="col-12 col-md-9 col-lg-6 p-0 " id="main">
        <div className="col-12 p-0 modow">
          <div className="col-12 d-flex p-0 p-md-2">
            <div className="card d-flex w-100">
              <img
                src={data.data && data.data.post.coverUrl}
                className="card-img-top img-fluid"
                style={{ maxHeight: "350px" }}
                id="detail-img"
                alt='mainPic'
              />
              <div className="card-body" id="detail-id">
                <h5 className="card-title pl-5" style={{ fontSize: "2rem" }}>
                  <b id="detail-title" style={{ fontSize: "48px" }}>
                    {data.data && data.data.post.postTitle}
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
                    {data.data && data.data.post.postTags}
                  </span>{" "}
                  <span className="tag-button bg-dark">#SQL</span>{" "}
                  <span className="tag-button bg-success">#Technology</span>{" "}
                  <span className="tag-button bg-warning">#JS</span>
                </p>
                <div className="media mb-2">
                  <img
                    src={data.data && data.data.post.avatar}
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
                    <b>{data.data && data.data.post.author}</b>
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
                    {data.data && data.data.post.date}
                  </span>

                  <div className="media-body container-fluid">
                    <div id="detail-id"></div>
                    <p
                      className="mt-5 d-flex text-justify"
                      style={{ fontSize: "20px" }}
                    >
                      {data.data && data.data.post.content}
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
