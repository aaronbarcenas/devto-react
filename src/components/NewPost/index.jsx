import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { newPost } from "../../services";
import "./index.css";
import HeaderLogo from "../Header/HeaderLogo";

const NewPost = () => {
  const [postImage, setImageUrl] = useState("");
  const [titlePost, setTitlePost] = useState("");
  const [textPost, setTextPost] = useState("");

  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    newPost({
      author: "Israel Salinas",
      avatar: "https://avatars.githubusercontent.com/u/6852277?v=4",
      content: textPost,
      coverUrl: postImage,
      date: "May 25",
      day: "25",
      month: "05",
      year: "21",
      imagesUrl: "",
      likes: 30,
      postTags: "#javascript",
      postTitle: titlePost,
    })
      .then((response) => history.push("/posts"))
      .catch((error) => alert("ocurrio un error, intenta mas tarde"));
  };

  return (
    <Fragment>
      <div className="container">
        <span className="headerlogo ">
          <HeaderLogo />
        </span>
        <b>Create a Post</b>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 w-75 mt-2">
            <form className="mb-4  px-5" id="addPostForm" onSubmit={submit}>
              <div className="border rounded bg-light p-5">
                <div className="form-group">
                  <input
                    type="texto"
                    className="form-control w-25"
                    id="postImage"
                    placeholder="Add a cover image"
                    onChange={(event) => setImageUrl(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="title"
                    placeholder="New post title here..."
                    onChange={(event) => setTitlePost(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="texto"
                    className="form-control pb-5"
                    id="content"
                    placeholder="Write your post content here..."
                    onChange={(event) => setTextPost(event.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary" id="btnAddPost">
                Publish
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                id="btnSaveDraft"
              >
                Save draft
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPost;
